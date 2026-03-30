import OpenAI from "openai";
import { tools } from "./tools";
import { getSystemPrompt } from "./system-prompt";
import { runFlightAgent } from "./flight-agent";
import { runHotelAgent } from "./hotel-agent";
import { runCarAgent } from "./car-agent";
import { runPolicyAgent } from "./policy-agent";
import { runWeatherAgent } from "./weather-agent";
import { OnProgress } from "./event-emitter";
import { chatWithRetry, ORCHESTRATOR_MODEL } from "./config";
import { logAgent, logLLMRequest, logLLMResponse, logError, startSession, endSession } from "./logger";

async function dispatchToAgent(name: string, instruction: string, onProgress?: OnProgress): Promise<string> {
  switch (name) {
    case "consult_policy_agent":
      return runPolicyAgent(instruction, onProgress);
    case "consult_flight_agent":
      return runFlightAgent(instruction, onProgress);
    case "consult_hotel_agent":
      return runHotelAgent(instruction, onProgress);
    case "consult_car_agent":
      return runCarAgent(instruction, onProgress);
    case "consult_weather_agent":
      return runWeatherAgent(instruction, onProgress);
    default:
      return `未知的 Agent: ${name}`;
  }
}

const AGENT_LABELS: Record<string, string> = {
  consult_policy_agent: "PolicyAgent",
  consult_flight_agent: "FlightAgent",
  consult_hotel_agent: "HotelAgent",
  consult_car_agent: "CarAgent",
  consult_weather_agent: "WeatherAgent",
};

export async function runAgent(
  conversationHistory: OpenAI.ChatCompletionMessageParam[],
  userMessage: string,
  onProgress?: OnProgress
): Promise<{ reply: string; updatedMessages: OpenAI.ChatCompletionMessageParam[] }> {
  const messages: OpenAI.ChatCompletionMessageParam[] = [
    { role: "system", content: getSystemPrompt() },
    ...conversationHistory,
    { role: "user", content: userMessage },
  ];

  onProgress?.("Orchestrator", "分析出差需求...");

  startSession(userMessage);

  const MAX_ITERATIONS = 10;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    logLLMRequest("Orchestrator", messages);
    const response = await chatWithRetry({
      model: ORCHESTRATOR_MODEL,
      max_tokens: 4096,
      tools,
      messages,
    });

    const choice = response.choices[0];
    logLLMResponse("Orchestrator", choice.finish_reason, choice.message.content, choice.message.tool_calls);
    const msg = { ...choice.message };
    if (!msg.content) msg.content = null;
    messages.push(msg);

    if (choice.finish_reason === "tool_calls") {
      const toolCalls = choice.message.tool_calls || [];

      const agentNames = toolCalls.map((tc) => AGENT_LABELS[tc.function.name] || tc.function.name).join("、");
      onProgress?.("Orchestrator", `委派任务给 ${agentNames}`);

      // 机票 Agent 是核心，失败则中断整个流程
      const CRITICAL_AGENTS = new Set(["consult_flight_agent"]);

      // 先尝试并行，如果有 429 则降级串行重试失败的
      const callAgent = async (toolCall: OpenAI.ChatCompletionMessageToolCall) => {
        const args = JSON.parse(toolCall.function.arguments) as { instruction: string };
        const label = AGENT_LABELS[toolCall.function.name] || toolCall.function.name;
        const agentReply = await dispatchToAgent(toolCall.function.name, args.instruction, onProgress);
        logAgent("Orchestrator", "agent_result", { agent: label, replyLength: agentReply.length });
        return {
          role: "tool" as const,
          tool_call_id: toolCall.id,
          content: agentReply,
        };
      };

      // 并行执行，收集结果（成功或失败）
      const settled = await Promise.allSettled(toolCalls.map(callAgent));

      const results: OpenAI.ChatCompletionToolMessageParam[] = [];
      const failedCalls: OpenAI.ChatCompletionMessageToolCall[] = [];

      for (let idx = 0; idx < settled.length; idx++) {
        const outcome = settled[idx];
        if (outcome.status === "fulfilled") {
          results.push(outcome.value);
        } else {
          const err = outcome.reason;
          const errStatus = err?.status ?? err?.statusCode;
          const is429 = [429, 503, 529].includes(errStatus) || /429|rate.?limit/i.test(String(err?.message));
          if (is429) {
            failedCalls.push(toolCalls[idx]);
          } else {
            // 非限流错误，直接处理
            const label = AGENT_LABELS[toolCalls[idx].function.name] || toolCalls[idx].function.name;
            const errMsg = err instanceof Error ? err.message : String(err);
            console.error(`[${label}] 执行失败:`, errMsg);
            logError(label, err);
            onProgress?.(label, `✗ 失败: ${errMsg.slice(0, 50)}`);

            if (CRITICAL_AGENTS.has(toolCalls[idx].function.name)) {
              onProgress?.("Orchestrator", `✗ 核心服务 ${label} 不可用，流程中断`);
              throw new Error(`核心服务 ${label} 不可用: ${errMsg}`);
            }
            results.push({
              role: "tool" as const,
              tool_call_id: toolCalls[idx].id,
              content: `${label} 暂时不可用（${errMsg.slice(0, 100)}），请根据其他 Agent 的结果继续为用户服务。`,
            });
          }
        }
      }

      // 429 失败的改为串行重试
      if (failedCalls.length > 0) {
        const names = failedCalls.map((tc) => AGENT_LABELS[tc.function.name] || tc.function.name).join("、");
        onProgress?.("Orchestrator", `${names} 限流，串行重试中...`);

        for (const toolCall of failedCalls) {
          const label = AGENT_LABELS[toolCall.function.name] || toolCall.function.name;
          try {
            const result = await callAgent(toolCall);
            results.push(result);
          } catch (error) {
            const errMsg = error instanceof Error ? error.message : String(error);
            console.error(`[${label}] 串行重试失败:`, errMsg);
            logError(label, error);
            onProgress?.(label, `✗ 失败: ${errMsg.slice(0, 50)}`);

            if (CRITICAL_AGENTS.has(toolCall.function.name)) {
              onProgress?.("Orchestrator", `✗ 核心服务 ${label} 不可用，流程中断`);
              throw new Error(`核心服务 ${label} 不可用: ${errMsg}`);
            }
            results.push({
              role: "tool" as const,
              tool_call_id: toolCall.id,
              content: `${label} 暂时不可用（${errMsg.slice(0, 100)}），请根据其他 Agent 的结果继续为用户服务。`,
            });
          }
        }
      }

      messages.push(...results);

      onProgress?.("Orchestrator", "整合所有结果...");
      continue;
    }

    const reply = choice.message.content || "";

    onProgress?.("Orchestrator", "✓ 完成");
    endSession();
    // 返回时去掉 system message
    return { reply, updatedMessages: messages.slice(1) };
  }

  endSession();
  return {
    reply: "抱歉，处理您的请求时遇到了问题，请重试。",
    updatedMessages: messages.slice(1),
  };
}

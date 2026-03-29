import OpenAI from "openai";
import { tools } from "./tools";
import { getSystemPrompt } from "./system-prompt";
import { runFlightAgent } from "./flight-agent";
import { runHotelAgent } from "./hotel-agent";
import { runCarAgent } from "./car-agent";
import { runPolicyAgent } from "./policy-agent";
import { runWeatherAgent } from "./weather-agent";
import { OnProgress } from "./event-emitter";
import { openai, ORCHESTRATOR_MODEL } from "./config";
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
    const response = await openai.chat.completions.create({
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

      // 并行调度所有子 Agent，核心 Agent 失败则抛出，非核心 Agent 降级
      const results = await Promise.all(
        toolCalls.map(async (toolCall) => {
          const args = JSON.parse(toolCall.function.arguments) as { instruction: string };
          const label = AGENT_LABELS[toolCall.function.name] || toolCall.function.name;
          try {
            const agentReply = await dispatchToAgent(toolCall.function.name, args.instruction, onProgress);
            logAgent("Orchestrator", "agent_result", { agent: label, replyLength: agentReply.length });
            return {
              role: "tool" as const,
              tool_call_id: toolCall.id,
              content: agentReply,
            };
          } catch (error) {
            const errMsg = error instanceof Error ? error.message : String(error);
            console.error(`[${label}] 执行失败:`, errMsg);
            logError(label, error);
            onProgress?.(label, `✗ 失败: ${errMsg.slice(0, 50)}`);

            // 核心 Agent 失败，直接中断
            if (CRITICAL_AGENTS.has(toolCall.function.name)) {
              onProgress?.("Orchestrator", `✗ 核心服务 ${label} 不可用，流程中断`);
              throw new Error(`核心服务 ${label} 不可用: ${errMsg}`);
            }

            return {
              role: "tool" as const,
              tool_call_id: toolCall.id,
              content: `${label} 暂时不可用（${errMsg.slice(0, 100)}），请根据其他 Agent 的结果继续为用户服务。`,
            };
          }
        })
      );

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

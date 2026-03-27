import Anthropic from "@anthropic-ai/sdk";
import { tools } from "./tools";
import { getSystemPrompt } from "./system-prompt";
import { runFlightAgent } from "./flight-agent";
import { runHotelAgent } from "./hotel-agent";
import { runCarAgent } from "./car-agent";
import { runPolicyAgent } from "./policy-agent";
import { runWeatherAgent } from "./weather-agent";
import { OnProgress } from "./event-emitter";
import { anthropic, ORCHESTRATOR_MODEL } from "./config";

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
  conversationHistory: Anthropic.Messages.MessageParam[],
  userMessage: string,
  onProgress?: OnProgress
): Promise<{ reply: string; updatedMessages: Anthropic.Messages.MessageParam[] }> {
  const messages: Anthropic.Messages.MessageParam[] = [
    ...conversationHistory,
    { role: "user", content: userMessage },
  ];

  onProgress?.("Orchestrator", "分析出差需求...");

  const MAX_ITERATIONS = 10;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const response = await anthropic.messages.create({
      model: ORCHESTRATOR_MODEL,
      max_tokens: 4096,
      system: getSystemPrompt(),
      tools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "tool_use") {
      const toolUseBlocks = response.content.filter(
        (b): b is Anthropic.Messages.ToolUseBlock => b.type === "tool_use"
      );

      const agentNames = toolUseBlocks.map((b) => AGENT_LABELS[b.name] || b.name).join("、");
      onProgress?.("Orchestrator", `委派任务给 ${agentNames}`);

      // 机票 Agent 是核心，失败则中断整个流程
      const CRITICAL_AGENTS = new Set(["consult_flight_agent"]);

      // 并行调度所有子 Agent，核心 Agent 失败则抛出，非核心 Agent 降级
      const results = await Promise.all(
        toolUseBlocks.map(async (block) => {
          const input = block.input as { instruction: string };
          const label = AGENT_LABELS[block.name] || block.name;
          try {
            const agentReply = await dispatchToAgent(block.name, input.instruction, onProgress);
            return {
              type: "tool_result" as const,
              tool_use_id: block.id,
              content: agentReply,
            };
          } catch (error) {
            const errMsg = error instanceof Error ? error.message : String(error);
            console.error(`[${label}] 执行失败:`, errMsg);
            onProgress?.(label, `✗ 失败: ${errMsg.slice(0, 50)}`);

            // 核心 Agent 失败，直接中断
            if (CRITICAL_AGENTS.has(block.name)) {
              onProgress?.("Orchestrator", `✗ 核心服务 ${label} 不可用，流程中断`);
              throw new Error(`核心服务 ${label} 不可用: ${errMsg}`);
            }

            return {
              type: "tool_result" as const,
              tool_use_id: block.id,
              content: `${label} 暂时不可用（${errMsg.slice(0, 100)}），请根据其他 Agent 的结果继续为用户服务。`,
              is_error: true as const,
            };
          }
        })
      );

      messages.push({ role: "user", content: results });

      onProgress?.("Orchestrator", "整合所有结果...");
      continue;
    }

    const textBlocks = response.content.filter(
      (b): b is Anthropic.Messages.TextBlock => b.type === "text"
    );
    const reply = textBlocks.map((b) => b.text).join("\n");

    onProgress?.("Orchestrator", "✓ 完成");
    return { reply, updatedMessages: messages };
  }

  return {
    reply: "抱歉，处理您的请求时遇到了问题，请重试。",
    updatedMessages: messages,
  };
}

import Anthropic from "@anthropic-ai/sdk";
import { getWeather } from "../services/weather.service";
import { OnProgress } from "./event-emitter";
import { anthropic, SUB_AGENT_MODEL } from "./config";

const WEATHER_SYSTEM_PROMPT = `你是一个专业的出差天气顾问。你的职责是根据天气数据为出差人员提供实用的天气分析和建议。

## 工作流程
1. 调用 get_weather 工具获取目的地天气数据
2. 分析天气情况，生成结构化的天气报告

## 输出格式要求
你的回复会被渲染为 Markdown，请严格按以下格式输出：

### 🌤️ 天气预报

| 日期 | 天气 | 气温 | 风力 | 出行建议 |
|------|------|------|------|----------|
| 03-30 | 多云 | 10~22°C | 2-4级 | 多云天气，温度适宜 |

### 👔 穿衣建议
根据气温范围给出具体穿衣建议（外套、衬衫、薄/厚等）。

### 🎒 携带物品提醒
根据天气情况提醒需要携带的物品（雨伞、防晒霜、口罩等）。

## 规则
- 必须调用工具获取数据，不能编造天气信息
- 建议要具体实用，不要泛泛而谈
- 使用中文回复`;

const weatherTools: Anthropic.Messages.Tool[] = [
  {
    name: "get_weather",
    description: "查询指定城市在给定日期范围内的每日天气预报",
    input_schema: {
      type: "object" as const,
      properties: {
        city: { type: "string", description: "城市名称" },
        start_date: { type: "string", description: "开始日期，YYYY-MM-DD" },
        end_date: { type: "string", description: "结束日期，YYYY-MM-DD" },
      },
      required: ["city", "start_date", "end_date"],
    },
  },
];

/**
 * 独立的 Weather Agent
 * 拥有自己的 system prompt、工具集和 agentic loop
 */
export async function runWeatherAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("WeatherAgent", "查询天气预报...");

  const messages: Anthropic.Messages.MessageParam[] = [
    {
      role: "user",
      content: instruction,
    },
  ];

  const MAX_ITERATIONS = 5;

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const response = await anthropic.messages.create({
      model: SUB_AGENT_MODEL,
      max_tokens: 2048,
      system: WEATHER_SYSTEM_PROMPT,
      tools: weatherTools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "tool_use") {
      const toolResults: Anthropic.Messages.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type === "tool_use") {
          onProgress?.("WeatherAgent", `调用工具 ${block.name}`);
          const input = block.input as { city: string; start_date: string; end_date: string };
          const result = getWeather(input.city, input.start_date, input.end_date);
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: JSON.stringify(result, null, 2),
          });
        }
      }

      messages.push({ role: "user", content: toolResults });
      continue;
    }

    // 提取文本回复
    const textBlocks = response.content.filter(
      (b): b is Anthropic.Messages.TextBlock => b.type === "text"
    );
    const reply = textBlocks.map((b) => b.text).join("\n");
    console.log(`[WeatherAgent] 完成`);
    onProgress?.("WeatherAgent", "✓ 完成");
    return reply;
  }

  return "天气查询暂时不可用，请稍后再试。";
}

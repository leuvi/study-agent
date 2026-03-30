import OpenAI from "openai";
import { searchFlights, bookFlight } from "../services/flight.service";
import { OnProgress } from "./event-emitter";
import { chatWithRetry, SUB_AGENT_MODEL } from "./config";
import { logLLMRequest, logLLMResponse, logToolCall } from "./logger";

const SYSTEM_PROMPT = `你是一个专业的机票预订专员。你的职责是搜索航班和执行预订。

## 输出格式要求
你的回复会被渲染为 Markdown，请严格按以下格式输出搜索结果：

| 编号 | 航班 | 航线 | 时间 | 舱位 | 价格 |
|------|------|------|------|------|------|
| 1 | CA1501 中国国航 | 北京→上海 | 07:00-09:20 | 经济舱 | ¥1,080 |

预订成功后，输出预订确认信息（预订号、航班、乘客等）。

## 规则
- 必须调用工具获取数据，不能编造航班信息
- 按价格从低到高排列
- 价格用 ¥ 显示，千位加逗号
- 使用中文回复`;

const flightTools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "search_flights",
      description: "搜索两个城市之间指定日期的可用航班",
      parameters: {
        type: "object",
        properties: {
          origin: { type: "string", description: "出发城市" },
          destination: { type: "string", description: "到达城市" },
          date: { type: "string", description: "出发日期，YYYY-MM-DD" },
        },
        required: ["origin", "destination", "date"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "book_flight",
      description: "预订指定的航班",
      parameters: {
        type: "object",
        properties: {
          flight_id: { type: "string", description: "航班ID（如 FL005）或航班号（如 CA1509）" },
          passenger_name: { type: "string", description: "乘客姓名" },
        },
        required: ["flight_id", "passenger_name"],
      },
    },
  },
];

interface FlightToolInput {
  origin?: string;
  destination?: string;
  date?: string;
  flight_id?: string;
  passenger_name?: string;
}

function dispatch(name: string, input: FlightToolInput): unknown {
  switch (name) {
    case "search_flights":
      return searchFlights(input.origin!, input.destination!, input.date!);
    case "book_flight":
      return bookFlight(input.flight_id!, input.passenger_name!);
    default:
      return { error: `未知工具: ${name}` };
  }
}

export async function runFlightAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("FlightAgent", "搜索航班中...");

  const messages: OpenAI.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    logLLMRequest("FlightAgent", messages);
    const response = await chatWithRetry({
      model: SUB_AGENT_MODEL,
      max_tokens: 2048,
      tools: flightTools,
      messages,
    });

    const choice = response.choices[0];
    logLLMResponse("FlightAgent", choice.finish_reason, choice.message.content, choice.message.tool_calls);
    const msg = { ...choice.message };
    if (!msg.content) msg.content = null;
    messages.push(msg);

    if (choice.finish_reason === "tool_calls") {
      const toolCalls = choice.message.tool_calls || [];
      for (const toolCall of toolCalls) {
        onProgress?.("FlightAgent", `调用工具 ${toolCall.function.name}`);
        const args = JSON.parse(toolCall.function.arguments) as FlightToolInput;
        const result = dispatch(toolCall.function.name, args);
        logToolCall("FlightAgent", toolCall.function.name, args, result);
        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result, null, 2),
        });
      }
      continue;
    }

    onProgress?.("FlightAgent", "✓ 完成");
    return choice.message.content || "";
  }

  return "航班查询暂时不可用。";
}

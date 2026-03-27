import Anthropic from "@anthropic-ai/sdk";
import { searchFlights, bookFlight } from "../services/flight.service";
import { OnProgress } from "./event-emitter";
import { anthropic, SUB_AGENT_MODEL } from "./config";

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

const flightTools: Anthropic.Messages.Tool[] = [
  {
    name: "search_flights",
    description: "搜索两个城市之间指定日期的可用航班",
    input_schema: {
      type: "object" as const,
      properties: {
        origin: { type: "string", description: "出发城市" },
        destination: { type: "string", description: "到达城市" },
        date: { type: "string", description: "出发日期，YYYY-MM-DD" },
      },
      required: ["origin", "destination", "date"],
    },
  },
  {
    name: "book_flight",
    description: "预订指定的航班",
    input_schema: {
      type: "object" as const,
      properties: {
        flight_id: { type: "string", description: "航班ID" },
        passenger_name: { type: "string", description: "乘客姓名" },
      },
      required: ["flight_id", "passenger_name"],
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

  const messages: Anthropic.Messages.MessageParam[] = [
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    const response = await anthropic.messages.create({
      model: SUB_AGENT_MODEL,
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      tools: flightTools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "tool_use") {
      const results = response.content
        .filter((b): b is Anthropic.Messages.ToolUseBlock => b.type === "tool_use")
        .map((block) => {
          onProgress?.("FlightAgent", `调用工具 ${block.name}`);
          return {
            type: "tool_result" as const,
            tool_use_id: block.id,
            content: JSON.stringify(dispatch(block.name, block.input as FlightToolInput), null, 2),
          };
        });
      messages.push({ role: "user", content: results });
      continue;
    }

    const reply = response.content
      .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    onProgress?.("FlightAgent", "✓ 完成");
    return reply;
  }

  return "航班查询暂时不可用。";
}

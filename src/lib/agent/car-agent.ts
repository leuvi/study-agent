import Anthropic from "@anthropic-ai/sdk";
import { searchCars, bookCar } from "../services/car.service";
import { OnProgress } from "./event-emitter";
import { anthropic, SUB_AGENT_MODEL } from "./config";

const SYSTEM_PROMPT = `你是一个专业的租车服务专员。你的职责是搜索可租用车辆和执行预订。

## 输出格式要求
你的回复会被渲染为 Markdown，请严格按以下格式输出搜索结果：

| 编号 | 租车公司 | 车型 | 类型 | 座位 | 单价/天 | 总价(N天) | 配置 |
|------|----------|------|------|------|---------|-----------|------|
| 1 | 神州租车 | 大众朗逸 | 经济型 | 5座 | ¥150 | ¥450 | GPS、蓝牙 |

预订成功后，输出预订确认信息（预订号、车型、取还车日期等）。

## 规则
- 必须调用工具获取数据，不能编造车辆信息
- 按价格从低到高排列
- 价格用 ¥ 显示，千位加逗号
- 使用中文回复`;

const carTools: Anthropic.Messages.Tool[] = [
  {
    name: "search_cars",
    description: "搜索指定城市在给定日期范围内的可租用车辆",
    input_schema: {
      type: "object" as const,
      properties: {
        city: { type: "string", description: "租车城市" },
        pickup_date: { type: "string", description: "取车日期，YYYY-MM-DD" },
        return_date: { type: "string", description: "还车日期，YYYY-MM-DD" },
      },
      required: ["city", "pickup_date", "return_date"],
    },
  },
  {
    name: "book_car",
    description: "预订指定的车辆",
    input_schema: {
      type: "object" as const,
      properties: {
        car_id: { type: "string", description: "车辆ID" },
        renter_name: { type: "string", description: "租车人姓名" },
        pickup_date: { type: "string", description: "取车日期，YYYY-MM-DD" },
        return_date: { type: "string", description: "还车日期，YYYY-MM-DD" },
      },
      required: ["car_id", "renter_name", "pickup_date", "return_date"],
    },
  },
];

interface CarToolInput {
  city?: string;
  pickup_date?: string;
  return_date?: string;
  car_id?: string;
  renter_name?: string;
}

function dispatch(name: string, input: CarToolInput): unknown {
  switch (name) {
    case "search_cars":
      return searchCars(input.city!, input.pickup_date!, input.return_date!);
    case "book_car":
      return bookCar(input.car_id!, input.renter_name!, input.pickup_date!, input.return_date!);
    default:
      return { error: `未知工具: ${name}` };
  }
}

export async function runCarAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("CarAgent", "搜索租车中...");

  const messages: Anthropic.Messages.MessageParam[] = [
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    const response = await anthropic.messages.create({
      model: SUB_AGENT_MODEL,
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      tools: carTools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "tool_use") {
      const results = response.content
        .filter((b): b is Anthropic.Messages.ToolUseBlock => b.type === "tool_use")
        .map((block) => {
          onProgress?.("CarAgent", `调用工具 ${block.name}`);
          return {
            type: "tool_result" as const,
            tool_use_id: block.id,
            content: JSON.stringify(dispatch(block.name, block.input as CarToolInput), null, 2),
          };
        });
      messages.push({ role: "user", content: results });
      continue;
    }

    const reply = response.content
      .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    onProgress?.("CarAgent", "✓ 完成");
    return reply;
  }

  return "租车查询暂时不可用。";
}

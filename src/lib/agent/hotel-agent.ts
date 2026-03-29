import OpenAI from "openai";
import { searchHotels, bookHotel } from "../services/hotel.service";
import { OnProgress } from "./event-emitter";
import { openai, SUB_AGENT_MODEL } from "./config";
import { logLLMRequest, logLLMResponse, logToolCall } from "./logger";

const SYSTEM_PROMPT = `你是一个专业的酒店预订专员。你的职责是搜索酒店和执行预订。

## 输出格式要求
你的回复会被渲染为 Markdown，请严格按以下格式输出搜索结果：

| 编号 | 酒店 | 星级 | 房型 | 单价/晚 | 总价(N晚) |
|------|------|------|------|---------|-----------|
| 1 | 全季酒店(陆家嘴店) | ⭐⭐⭐ | 商务大床房 | ¥380 | ¥1,140 |

预订成功后，输出预订确认信息（预订号、酒店、房型、入住退房日期等）。

## 规则
- 必须调用工具获取数据，不能编造酒店信息
- 按性价比排列（考虑星级和价格）
- 价格用 ¥ 显示，千位加逗号
- 使用中文回复`;

const hotelTools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "search_hotels",
      description: "搜索指定城市在给定日期范围内的可用酒店",
      parameters: {
        type: "object",
        properties: {
          city: { type: "string", description: "城市名称" },
          check_in: { type: "string", description: "入住日期，YYYY-MM-DD" },
          check_out: { type: "string", description: "退房日期，YYYY-MM-DD" },
        },
        required: ["city", "check_in", "check_out"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "book_hotel",
      description: "预订指定的酒店",
      parameters: {
        type: "object",
        properties: {
          hotel_id: { type: "string", description: "酒店ID" },
          guest_name: { type: "string", description: "客人姓名" },
          check_in: { type: "string", description: "入住日期，YYYY-MM-DD" },
          check_out: { type: "string", description: "退房日期，YYYY-MM-DD" },
        },
        required: ["hotel_id", "guest_name", "check_in", "check_out"],
      },
    },
  },
];

interface HotelToolInput {
  city?: string;
  check_in?: string;
  check_out?: string;
  hotel_id?: string;
  guest_name?: string;
}

function dispatch(name: string, input: HotelToolInput): unknown {
  switch (name) {
    case "search_hotels":
      return searchHotels(input.city!, input.check_in!, input.check_out!);
    case "book_hotel":
      return bookHotel(input.hotel_id!, input.guest_name!, input.check_in!, input.check_out!);
    default:
      return { error: `未知工具: ${name}` };
  }
}

export async function runHotelAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("HotelAgent", "搜索酒店中...");

  const messages: OpenAI.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    logLLMRequest("HotelAgent", messages);
    const response = await openai.chat.completions.create({
      model: SUB_AGENT_MODEL,
      max_tokens: 2048,
      tools: hotelTools,
      messages,
    });

    const choice = response.choices[0];
    logLLMResponse("HotelAgent", choice.finish_reason, choice.message.content, choice.message.tool_calls);
    const msg = { ...choice.message };
    if (!msg.content) msg.content = null;
    messages.push(msg);

    if (choice.finish_reason === "tool_calls") {
      const toolCalls = choice.message.tool_calls || [];
      for (const toolCall of toolCalls) {
        onProgress?.("HotelAgent", `调用工具 ${toolCall.function.name}`);
        const args = JSON.parse(toolCall.function.arguments) as HotelToolInput;
        const result = dispatch(toolCall.function.name, args);
        logToolCall("HotelAgent", toolCall.function.name, args, result);
        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result, null, 2),
        });
      }
      continue;
    }

    onProgress?.("HotelAgent", "✓ 完成");
    return choice.message.content || "";
  }

  return "酒店查询暂时不可用。";
}

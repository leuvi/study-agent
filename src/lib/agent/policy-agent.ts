import OpenAI from "openai";
import { getTravelPolicy } from "../services/policy.service";
import { OnProgress } from "./event-emitter";
import { chatWithRetry, SUB_AGENT_MODEL } from "./config";
import { logLLMRequest, logLLMResponse, logToolCall } from "./logger";

const SYSTEM_PROMPT = `你是一个公司差旅政策顾问。你的职责是查询并解读公司差旅政策。

## 输出格式要求
查询到政策后，请用以下格式清晰说明：

**职级：**XXX

| 项目 | 限额 |
|------|------|
| 机票预算上限 | ¥X,XXX |
| 酒店预算上限（每晚） | ¥XXX |
| 允许舱位 | 经济舱/商务舱 |
| 首选航空公司 | XXX、XXX |

## 规则
- 必须调用工具获取数据，不能编造政策
- 使用中文回复`;

const policyTools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_travel_policy",
      description: "查询指定职级的公司差旅政策",
      parameters: {
        type: "object",
        properties: {
          employee_level: {
            type: "string",
            description: "员工职级：junior、senior、manager、director",
            enum: ["junior", "senior", "manager", "director"],
          },
        },
        required: ["employee_level"],
      },
    },
  },
];

function dispatch(name: string, input: { employee_level?: string }): unknown {
  if (name === "get_travel_policy") {
    return getTravelPolicy(input.employee_level!);
  }
  return { error: `未知工具: ${name}` };
}

export async function runPolicyAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("PolicyAgent", "查询差旅政策...");

  const messages: OpenAI.ChatCompletionMessageParam[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    logLLMRequest("PolicyAgent", messages);
    const response = await chatWithRetry({
      model: SUB_AGENT_MODEL,
      max_tokens: 1024,
      tools: policyTools,
      messages,
    });

    const choice = response.choices[0];
    logLLMResponse("PolicyAgent", choice.finish_reason, choice.message.content, choice.message.tool_calls);
    const msg = { ...choice.message };
    if (!msg.content) msg.content = null;
    messages.push(msg);

    if (choice.finish_reason === "tool_calls") {
      const toolCalls = choice.message.tool_calls || [];
      for (const toolCall of toolCalls) {
        onProgress?.("PolicyAgent", `调用工具 ${toolCall.function.name}`);
        const args = JSON.parse(toolCall.function.arguments) as { employee_level?: string };
        const result = dispatch(toolCall.function.name, args);
        logToolCall("PolicyAgent", toolCall.function.name, args, result);
        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result, null, 2),
        });
      }
      continue;
    }

    onProgress?.("PolicyAgent", "✓ 完成");
    return choice.message.content || "";
  }

  return "政策查询暂时不可用。";
}

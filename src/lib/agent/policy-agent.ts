import Anthropic from "@anthropic-ai/sdk";
import { getTravelPolicy } from "../services/policy.service";
import { OnProgress } from "./event-emitter";
import { anthropic, SUB_AGENT_MODEL } from "./config";

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

const policyTools: Anthropic.Messages.Tool[] = [
  {
    name: "get_travel_policy",
    description: "查询指定职级的公司差旅政策",
    input_schema: {
      type: "object" as const,
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
];

function dispatch(name: string, input: { employee_level?: string }): unknown {
  if (name === "get_travel_policy") {
    return getTravelPolicy(input.employee_level!);
  }
  return { error: `未知工具: ${name}` };
}

export async function runPolicyAgent(instruction: string, onProgress?: OnProgress): Promise<string> {
  onProgress?.("PolicyAgent", "查询差旅政策...");

  const messages: Anthropic.Messages.MessageParam[] = [
    { role: "user", content: instruction },
  ];

  for (let i = 0; i < 5; i++) {
    const response = await anthropic.messages.create({
      model: SUB_AGENT_MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      tools: policyTools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "tool_use") {
      const results = response.content
        .filter((b): b is Anthropic.Messages.ToolUseBlock => b.type === "tool_use")
        .map((block) => {
          onProgress?.("PolicyAgent", `调用工具 ${block.name}`);
          return {
            type: "tool_result" as const,
            tool_use_id: block.id,
            content: JSON.stringify(dispatch(block.name, block.input as { employee_level?: string }), null, 2),
          };
        });
      messages.push({ role: "user", content: results });
      continue;
    }

    const reply = response.content
      .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    onProgress?.("PolicyAgent", "✓ 完成");
    return reply;
  }

  return "政策查询暂时不可用。";
}

import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.API_KEY!,
  baseURL: process.env.API_BASE_URL,
  maxRetries: 0, // 禁用 SDK 内置重试，由 chatWithRetry 统一管理
});

export const ORCHESTRATOR_MODEL = process.env.ORCHESTRATOR_MODEL || "deepseek-chat";
export const SUB_AGENT_MODEL = process.env.SUB_AGENT_MODEL || "deepseek-chat";

/**
 * 带限流保护的 chat.completions.create 封装
 * - 默认直接并行请求
 * - 遇到 429/503/529 自动指数退避重试
 */
export async function chatWithRetry(
  params: OpenAI.ChatCompletionCreateParamsNonStreaming,
  maxRetries = 3
): Promise<OpenAI.ChatCompletion> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await openai.chat.completions.create(params);
    } catch (error: unknown) {
      const status = (error as { status?: number }).status
        ?? (error as { statusCode?: number }).statusCode;
      const isRateLimit = status === 429 || status === 503 || status === 529;
      if (isRateLimit && attempt < maxRetries) {
        const wait = Math.pow(2, attempt) * 5000; // 5s, 10s, 20s
        console.log(`[Retry] ${status} 限流，${wait / 1000}s 后重试 (${attempt + 1}/${maxRetries})...`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      throw error;
    }
  }
  throw new Error("unreachable");
}

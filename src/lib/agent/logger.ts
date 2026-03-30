function timestamp(): string {
  return new Date().toISOString();
}

function append(entry: unknown) {
  console.log(JSON.stringify(entry));
}

export function startSession(userMessage: string) {
  append({ time: timestamp(), event: "session_start", userMessage });
}

export function endSession() {
  append({ time: timestamp(), event: "session_end" });
}

export function logAgent(agent: string, event: string, data?: unknown) {
  append({ time: timestamp(), agent, event, data });
}

export function logToolCall(agent: string, toolName: string, input: unknown, output: unknown) {
  logAgent(agent, "tool_call", { tool: toolName, input, output });
}

export function logLLMRequest(agent: string, messages: unknown[]) {
  logAgent(agent, "llm_request", { messageCount: messages.length, lastMessage: messages[messages.length - 1] });
}

export function logLLMResponse(agent: string, finishReason: string | null, content: unknown, toolCalls: unknown) {
  logAgent(agent, "llm_response", { finishReason, content, toolCalls });
}

export function logError(agent: string, error: unknown) {
  const msg = error instanceof Error ? { message: error.message, stack: error.stack } : String(error);
  logAgent(agent, "error", msg);
}

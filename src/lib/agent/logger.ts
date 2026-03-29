import fs from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

// 服务启动时生成一个文件，整个进程生命周期共用
ensureLogDir();
const ts = new Date().toISOString().replace(/[:.]/g, "-");
const LOG_FILE = path.join(LOG_DIR, `server-${ts}.log`);

function timestamp(): string {
  return new Date().toISOString();
}

function append(entry: unknown) {
  fs.appendFileSync(LOG_FILE, JSON.stringify(entry, null, 2) + "\n---\n", "utf-8");
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

import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
  baseURL: process.env.ANTHROPIC_BASE_URL,
});

export const ORCHESTRATOR_MODEL = process.env.ORCHESTRATOR_MODEL || "claude-opus-4-6";
export const SUB_AGENT_MODEL = process.env.SUB_AGENT_MODEL || "claude-haiku-4-5-20251001";

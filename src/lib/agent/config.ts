import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.API_KEY!,
  baseURL: process.env.API_BASE_URL,
});

export const ORCHESTRATOR_MODEL = process.env.ORCHESTRATOR_MODEL || "deepseek-chat";
export const SUB_AGENT_MODEL = process.env.SUB_AGENT_MODEL || "deepseek-chat";

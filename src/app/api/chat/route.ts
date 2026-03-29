import { NextRequest } from "next/server";
import { runAgent } from "@/lib/agent/agent";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      messages,
      userMessage,
    }: {
      messages: OpenAI.ChatCompletionMessageParam[];
      userMessage: string;
    } = body;

    if (!userMessage || typeof userMessage !== "string") {
      return new Response(
        JSON.stringify({ error: "缺少 userMessage 参数" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const onProgress = (agent: string, message: string) => {
          const event = JSON.stringify({ type: "step", agent, message });
          controller.enqueue(encoder.encode(`data: ${event}\n\n`));
        };

        try {
          const result = await runAgent(messages || [], userMessage, onProgress);

          const doneEvent = JSON.stringify({
            type: "done",
            reply: result.reply,
            messages: result.updatedMessages,
          });
          controller.enqueue(encoder.encode(`data: ${doneEvent}\n\n`));
        } catch (error) {
          console.error("Agent error:", error);
          const errorEvent = JSON.stringify({
            type: "error",
            message: "处理请求时出错，请稍后重试",
          });
          controller.enqueue(encoder.encode(`data: ${errorEvent}\n\n`));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Request error:", error);
    return new Response(
      JSON.stringify({ error: "处理请求时出错" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

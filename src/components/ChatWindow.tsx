"use client";

import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DisplayMessage {
  role: "user" | "assistant";
  content: string;
}

interface ProgressStep {
  agent: string;
  message: string;
  time: number; // seconds since start
}

export default function ChatWindow() {
  const [displayMessages, setDisplayMessages] = useState<DisplayMessage[]>([]);
  const [apiMessages, setApiMessages] = useState<unknown[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState<ProgressStep[]>([]);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayMessages, loading, steps]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setDisplayMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);
    setSteps([]);
    startTimeRef.current = Date.now();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, userMessage: text }),
      });

      if (!res.ok) {
        const data = await res.json();
        setDisplayMessages((prev) => [
          ...prev,
          { role: "assistant", content: `出错了：${data.error || "未知错误"}` },
        ]);
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6);
          try {
            const event = JSON.parse(json);

            if (event.type === "step") {
              const elapsed = ((Date.now() - startTimeRef.current) / 1000).toFixed(1);
              setSteps((prev) => [
                ...prev,
                { agent: event.agent, message: event.message, time: parseFloat(elapsed) },
              ]);
            } else if (event.type === "done") {
              setDisplayMessages((prev) => [
                ...prev,
                { role: "assistant", content: event.reply },
              ]);
              setApiMessages(event.messages);
              setLoading(false);
              // Keep steps visible briefly then clear
              setTimeout(() => setSteps([]), 2000);
            } else if (event.type === "error") {
              setDisplayMessages((prev) => [
                ...prev,
                { role: "assistant", content: `出错了：${event.message}` },
              ]);
              setLoading(false);
            }
          } catch {
            // ignore parse errors
          }
        }
      }
    } catch {
      setDisplayMessages((prev) => [
        ...prev,
        { role: "assistant", content: "网络错误，请检查连接后重试。" },
      ]);
      setLoading(false);
    }
  }

  if (!mounted) {
    return <div style={{ padding: 40, textAlign: "center" }}>加载中...</div>;
  }

  return (
    <>
      <div className="chat-messages">
        {displayMessages.length === 0 && !loading && (
          <div style={{ textAlign: "center", color: "#9ca3af", marginTop: "40px" }}>
            <p style={{ fontSize: "32px", marginBottom: "16px" }}>✈️ 🏨</p>
            <p>试试说：</p>
            <p style={{ marginTop: "8px", fontStyle: "italic" }}>
              &quot;我下周一要从北京出差去上海，待3天，我是senior&quot;
            </p>
          </div>
        )}

        {displayMessages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="message-avatar">
              {msg.role === "user" ? "你" : "AI"}
            </div>
            <div className="message-content">
              {msg.role === "assistant" ? (
                <Markdown remarkPlugins={[remarkGfm]}>{msg.content}</Markdown>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {steps.length > 0 && (
          <div className="progress-timeline">
            <div className="progress-header">Agent 执行过程</div>
            {steps.map((step, i) => {
              const isDone = step.message.startsWith("✓");
              const isOrchestrator = step.agent === "Orchestrator";
              return (
                <div key={i} className={`progress-step ${isDone ? "done" : ""} ${isOrchestrator ? "orchestrator" : "sub-agent"}`}>
                  <span className="progress-icon">
                    {isDone ? "✓" : isOrchestrator ? "●" : "◐"}
                  </span>
                  <span className="progress-agent">{step.agent}</span>
                  <span className="progress-message">{step.message}</span>
                  <span className="progress-time">{step.time}s</span>
                </div>
              );
            })}
            {loading && (
              <div className="progress-step active">
                <span className="progress-icon spinning">◐</span>
                <span className="progress-message">处理中...</span>
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <div className="chat-input-form">
          <input
            className="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
            placeholder="描述你的出差需求..."
            disabled={loading}
          />
          <button
            className="send-button"
            type="button"
            onClick={() => handleSend()}
            disabled={loading}
          >
            发送
          </button>
        </div>
      </div>
    </>
  );
}

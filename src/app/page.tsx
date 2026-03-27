import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>出差预订助手</h1>
        <p>我可以帮你搜索和预订出差机票、酒店，并根据公司差旅政策智能推荐</p>
      </header>
      <ChatWindow />
    </div>
  );
}

# 出差预订 Multi-Agent 系统

企业出差预订 AI Agent，采用 Orchestrator + 子 Agent 架构。用于学习 AI Agent 开发模式。

## 架构

```
用户 → ChatWindow (React) → POST /api/chat (SSE) → Orchestrator (纯调度)
                                                        ├── FlightAgent  — 搜索/预订航班 [核心,失败中断]
                                                        ├── HotelAgent   — 搜索/预订酒店 [非核心,降级]
                                                        ├── CarAgent     — 搜索/预订租车 [非核心,降级]
                                                        ├── PolicyAgent  — 查询差旅政策 [非核心,降级]
                                                        └── WeatherAgent — 天气预报     [非核心,降级]
```

- Orchestrator 不直接调用任何 service，只通过 `consult_*_agent` 工具委派任务
- 子 Agent 各自拥有独立的 system prompt、工具集、agentic loop
- 所有子 Agent **并行优先**执行（`Promise.allSettled`），遇到限流自动降级串行重试
- 内置 `chatWithRetry` 封装，支持 429/503/529 自动指数退避重试
- 数据层全部为 Mock 数据（15 个城市，281 条航班、197 家酒店、162 辆租车）

## 项目结构

```
src/
├── app/
│   ├── api/chat/route.ts       # SSE 流式 API，连接 onProgress 回调到 SSE 事件
│   ├── page.tsx                # Server Component，渲染 ChatWindow
│   ├── layout.tsx              # 根布局
│   └── globals.css             # 全局样式 + Markdown 渲染 + 进度时间线
│
├── components/
│   └── ChatWindow.tsx          # 客户端组件：聊天 UI + SSE 读取 + 进度时间线
│
└── lib/
    ├── agent/
    │   ├── config.ts           # 共享 OpenAI 客户端 + chatWithRetry 限流重试封装
    │   ├── event-emitter.ts    # OnProgress 回调类型定义
    │   ├── agent.ts            # Orchestrator：调度 5 个子 Agent，分级容错
    │   ├── tools.ts            # Orchestrator 的 5 个 consult_*_agent 工具定义
    │   ├── system-prompt.ts    # Orchestrator 的调度员 system prompt
    │   ├── logger.ts           # 调试日志（per-server-session，写入 logs/）
    │   ├── flight-agent.ts     # 机票 Agent（search_flights + book_flight）
    │   ├── hotel-agent.ts      # 酒店 Agent（search_hotels + book_hotel）
    │   ├── car-agent.ts        # 租车 Agent（search_cars + book_car）
    │   ├── policy-agent.ts     # 政策 Agent（get_travel_policy）
    │   └── weather-agent.ts    # 天气 Agent（get_weather）
    │
    ├── services/               # 业务逻辑层（被子 Agent 调用）
    │   ├── flight.service.ts   # searchFlights / bookFlight
    │   ├── hotel.service.ts    # searchHotels / bookHotel
    │   ├── car.service.ts      # searchCars / bookCar
    │   ├── policy.service.ts   # getTravelPolicy
    │   └── weather.service.ts  # getWeather（基于城市+季节的确定性模拟）
    │
    ├── data/                   # Mock 数据
    │   ├── flights.ts          # 281 条航班（15 城市间，含经济/商务/头等）
    │   ├── hotels.ts           # 197 家酒店（15 城市，3-5 星级）
    │   └── policy.ts           # 4 个职级的差旅政策
    │
    └── types.ts                # Flight, Hotel, BookingResult, TravelPolicy, ChatMessage
```

## 关键设计

### Agentic Loop（每个 Agent 都遵循）
```
messages = [system prompt, user instruction]
loop:
  response = chatWithRetry(model, tools, messages)  // 内置 429 重试
  if tool_calls → 执行工具，结果推入 messages，continue
  if stop → return reply
```

### 分级容错 + 限流降级（agent.ts）
```typescript
CRITICAL_AGENTS = ["consult_flight_agent"]  // 核心 Agent，失败中断整个流程
其他 Agent 失败 → 降级提示，Orchestrator 继续整合可用结果

// 并行优先，429 降级串行
Promise.allSettled(子 Agent 并行调用)
  → 成功的直接用
  → 429 失败的自动串行重试
```

### SSE 进度推送（route.ts → ChatWindow.tsx）
```
后端: onProgress(agent, message) → SSE data event
前端: ReadableStream 读取 → 实时渲染进度时间线
```

## 配置

支持任意 OpenAI 兼容的模型提供商（DeepSeek、千问、Kimi、Claude 代理等）。

```env
# .env.local
API_BASE_URL=https://api.deepseek.com/v1     # 或其他 OpenAI 兼容地址
API_KEY=your-api-key
ORCHESTRATOR_MODEL=deepseek-chat              # 调度用的模型
SUB_AGENT_MODEL=deepseek-chat                 # 子 Agent 用的模型
```

## 启动

```bash
npm install
npm run dev     # http://localhost:3060
```

## 学习文档

见 [AGENT-GUIDE.md](./AGENT-GUIDE.md) — Agent 开发进阶指南，基于本项目的实践经验。

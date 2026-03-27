# 出差预订 Multi-Agent 系统

企业出差预订 AI Agent，采用 Orchestrator + 子 Agent 架构。用于学习 AI Agent 开发模式。

## 架构

```
用户 → ChatWindow (React) → POST /api/chat (SSE) → Orchestrator (Sonnet, 纯调度)
                                                        ├── FlightAgent  (Haiku) — 搜索/预订航班 [核心,失败中断]
                                                        ├── HotelAgent   (Haiku) — 搜索/预订酒店 [非核心,降级]
                                                        ├── CarAgent     (Haiku) — 搜索/预订租车 [非核心,降级]
                                                        ├── PolicyAgent  (Haiku) — 查询差旅政策 [非核心,降级]
                                                        └── WeatherAgent (Haiku) — 天气预报     [非核心,降级]
```

- Orchestrator 不直接调用任何 service，只通过 `consult_*_agent` 工具委派任务
- 子 Agent 各自拥有独立的 system prompt、工具集、agentic loop
- 所有子 Agent **并行执行**（`Promise.all`），通过 SSE 实时推送执行进度到前端
- 数据层全部为 Mock 数据

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
    │   ├── config.ts           # 共享 Anthropic 实例 + 模型常量（读 env）
    │   ├── event-emitter.ts    # OnProgress 回调类型定义
    │   ├── agent.ts            # Orchestrator：调度 5 个子 Agent，分级容错
    │   ├── tools.ts            # Orchestrator 的 5 个 consult_*_agent 工具定义
    │   ├── system-prompt.ts    # Orchestrator 的调度员 system prompt
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
    │   ├── flights.ts          # 28 条航班（6 城市间）
    │   ├── hotels.ts           # 20 家酒店（6 城市）
    │   └── policy.ts           # 4 个职级的差旅政策
    │
    └── types.ts                # Flight, Hotel, BookingResult, TravelPolicy, ChatMessage
```

## 关键设计

### Agentic Loop（每个 Agent 都遵循）
```
messages = [user instruction]
loop:
  response = claude.messages.create(model, system, tools, messages)
  if tool_use → 执行工具，结果推入 messages，continue
  if text → return reply
```

### 分级容错（agent.ts）
```typescript
CRITICAL_AGENTS = ["consult_flight_agent"]  // 核心 Agent，失败中断整个流程
其他 Agent 失败 → 降级提示，Orchestrator 继续整合可用结果
```

### SSE 进度推送（route.ts → ChatWindow.tsx）
```
后端: onProgress(agent, message) → SSE data event
前端: ReadableStream 读取 → 实时渲染进度时间线
```

## 配置

```env
# .env.local
ANTHROPIC_BASE_URL=https://your-api-base-url/v1
ANTHROPIC_API_KEY=your-api-key
ORCHESTRATOR_MODEL=claude-sonnet-4-20250514    # 调度用 Sonnet
SUB_AGENT_MODEL=claude-haiku-4-5-20251001      # 子 Agent 用 Haiku
```

## 启动

```bash
pnpm install
pnpm dev        # http://localhost:3060
```

## 学习文档

见 [AGENT-GUIDE.md](./AGENT-GUIDE.md) — Agent 开发进阶指南，基于本项目的实践经验。

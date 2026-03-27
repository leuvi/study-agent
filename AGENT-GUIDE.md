# AI Agent 开发进阶指南

> 基于出差预订 Agent 项目的实践经验，从零到生产级 Agent 的完整技术路线。
> 本项目已实现 ✅ 标记的部分，其余为进阶方向。

---

## 一、Agent 核心概念

### 什么是 Agent？

Agent = LLM + 工具 + 自主决策循环

```
用户输入 → LLM 推理 → 选择工具 → 执行 → 观察结果 → 继续推理 → ... → 最终回复
```

关键区别于普通 LLM 调用：**是 LLM 自己决定**调什么工具、什么顺序、调几次，而不是开发者硬编码 if/else。

### Agentic Loop（本项目所有 Agent 的核心模式）✅

```typescript
// 每个 Agent 都遵循这个循环
const messages = [{ role: "user", content: instruction }];

while (true) {
  const response = await anthropic.messages.create({
    model, system, tools, messages
  });
  messages.push({ role: "assistant", content: response.content });

  if (response.stop_reason === "tool_use") {
    // LLM 决定调用工具 → 执行 → 结果喂回
    const results = executeTools(response.content);
    messages.push({ role: "user", content: results });
    continue;  // 让 LLM 继续推理
  }

  return extractText(response);  // LLM 认为任务完成
}
```

### Tool Use（工具定义）✅

工具 = JSON Schema 描述的函数接口，LLM 根据描述决定何时调用。

```typescript
{
  name: "search_flights",
  description: "搜索两个城市之间指定日期的可用航班",  // 描述质量直接影响调用准确度
  input_schema: {
    type: "object",
    properties: {
      origin: { type: "string", description: "出发城市" },
      destination: { type: "string", description: "到达城市" },
      date: { type: "string", description: "YYYY-MM-DD 格式" },
    },
    required: ["origin", "destination", "date"],
  },
}
```

**经验：** description 写得越清晰，LLM 的工具选择越准确。模糊的描述 = 错误的调用。

---

## 二、Multi-Agent 架构 ✅

### 为什么要拆分？

单 Agent 8 个工具 → 拆分为 1 个 Orchestrator + 5 个专职子 Agent。

| 单 Agent 的问题 | Multi-Agent 的解决 |
|----------------|-------------------|
| prompt 臃肿，所有指令挤在一起 | 每个 Agent 的 prompt 专注一件事 |
| 工具多了容易选错 | 每个 Agent 只有 1-2 个工具 |
| 无法并行，串行等待 | 子 Agent 并行执行（Promise.all） |
| 一个功能出错影响全局 | 分级容错，非核心降级 |
| 难以独立测试和迭代 | 每个 Agent 可独立测试 |

### 本项目架构 ✅

```
用户 → Orchestrator（Sonnet，纯调度，不调用任何 service）
          ├── FlightAgent  (Haiku) — search_flights / book_flight    [P0 核心]
          ├── HotelAgent   (Haiku) — search_hotels / book_hotel      [P2 辅助]
          ├── CarAgent     (Haiku) — search_cars / book_car          [P2 辅助]
          ├── PolicyAgent  (Haiku) — get_travel_policy               [P2 辅助]
          └── WeatherAgent (Haiku) — get_weather                     [P2 辅助]
```

### 通信方式：工具即接口 ✅

Orchestrator 通过 `consult_*_agent` 工具调用子 Agent，每个工具只接收一个 `instruction` 字符串：

```typescript
// Orchestrator 的工具定义
{
  name: "consult_flight_agent",
  description: "调用机票专员 Agent，搜索航班或预订机票",
  input_schema: {
    properties: {
      instruction: { type: "string", description: "给机票 Agent 的指令" }
    }
  }
}

// Orchestrator 决定调用时，Claude 会生成类似：
// instruction: "搜索2026-03-30从北京到上海的航班"
```

子 Agent 收到 instruction 后，用自己的工具去执行，返回 Markdown 格式的结果。

### 模型分层策略 ✅

| 角色 | 模型 | 原因 |
|------|------|------|
| Orchestrator | Sonnet | 需要理解用户意图、协调多个 Agent、整合结果 |
| 子 Agent | Haiku | 只做简单任务（调工具+格式化），快且便宜 |

**选模型的经验法则：**
- 需要复杂推理、多步规划 → Sonnet/Opus
- 格式化、摘要、简单分析、工具调用 → Haiku
- 不确定时先用 Haiku，输出质量不够再升级

### 并行调度 ✅

```typescript
// agent.ts — 所有子 Agent 同时启动
const results = await Promise.all(
  toolUseBlocks.map(async (block) => {
    const agentReply = await dispatchToAgent(block.name, input.instruction, onProgress);
    return { type: "tool_result", tool_use_id: block.id, content: agentReply };
  })
);
```

串行：搜航班(3s) → 搜酒店(3s) → 搜租车(3s) → 查天气(3s) = 12s
并行：搜航班 + 搜酒店 + 搜租车 + 查天气 = 3s（取最慢的）

### 分级容错 ✅

不同 Agent 的重要程度不同，失败策略应该不同：

```typescript
// P0 核心 Agent — 失败中断整个流程
const CRITICAL_AGENTS = new Set(["consult_flight_agent"]);

// 在 Promise.all 的 catch 中：
if (CRITICAL_AGENTS.has(block.name)) {
  throw new Error(`核心服务 ${label} 不可用`);  // 中断
}
// 非核心 Agent → 返回降级提示，Orchestrator 继续用可用结果回复
return { content: `${label} 暂时不可用，请根据其他结果继续服务。`, is_error: true };
```

| 级别 | Agent | 失败策略 | 原因 |
|------|-------|---------|------|
| P0 核心 | 机票 | 中断整个流程 | 没机票一切无意义 |
| P1 重要 | 酒店、政策 | 可加重试，再失败降级 | 重要但不阻塞 |
| P2 辅助 | 租车、天气 | 直接降级 | 锦上添花 |

### 可观测性：SSE 进度推送 ✅

子 Agent 执行过程通过回调实时推送到前端：

```typescript
// 后端：每个 Agent 在关键节点调用回调
onProgress?.("FlightAgent", "搜索航班中...");
onProgress?.("FlightAgent", "调用工具 search_flights");
onProgress?.("FlightAgent", "✓ 完成");

// API 路由：回调连接到 SSE 流
const onProgress = (agent, message) => {
  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "step", agent, message })}\n\n`));
};

// 前端：ReadableStream 读取，实时渲染时间线
```

---

## 三、进阶方向（本项目尚未实现）

### 1. Planning 能力

**问题：** 当前 Agent 的"计划"是隐式的，靠 system prompt 引导。复杂场景容易遗漏步骤。

**改进：** 让 LLM 先显式输出计划，再逐步执行。

```typescript
// Step 1: 生成计划
const plan = await llm.generate(`
  用户需求：${userMessage}
  请制定执行计划，列出步骤：
`);
// plan.steps = ["查询政策", "搜索航班", "搜索酒店", "查询天气", "整合推荐"]

// Step 2: 逐步执行 + 反思
for (const step of plan.steps) {
  const result = await executeStep(step);
  const reflection = await llm.generate(`
    刚完成：${step}，结果：${result}
    剩余计划：${plan.remainingSteps}
    是否需要调整？
  `);
  if (reflection.needsReplan) plan = reflection.newPlan;
}
```

**关键技术：** Plan-and-Solve、Tree-of-Thought、Self-Reflection

---

### 2. Memory 系统

**问题：** 当前每次对话都是全新的，不记得"张三总是选国航"。

**三层记忆架构：**

| 层级 | 作用 | 存储 | 生命周期 |
|------|------|------|---------|
| 工作记忆 | 当前对话上下文 | messages 数组 | 单次对话 |
| 短期记忆 | 近期交互摘要 | Redis / DB | 天~周 |
| 长期记忆 | 用户偏好 | 向量数据库 | 永久 |

```typescript
// 对话结束后提取偏好
const memories = await llm.generate(`提取用户偏好：${conversation}`);
await vectorDB.store(userId, memories);

// 下次对话前检索
const prefs = await vectorDB.search(userId, userMessage);
systemPrompt += `\n已知偏好：${prefs}`;
// → "张三偏好国航，总是订经济舱，喜欢上午航班"
```

**关键技术：** 向量数据库（Pinecone/Chroma/pgvector）、RAG、记忆摘要与遗忘

---

### 3. 工作流引擎 & 状态管理

**问题：** 出差不只是"搜索+预订"，完整流程需要状态跟踪。

```
提交申请 → 主管审批 → 预订(机票/酒店/租车) → 出票确认 → 出差中 → 返程 → 报销 → 打款
```

**状态机设计：**

```typescript
enum TripStatus {
  DRAFT, PENDING_APPROVAL, APPROVED, BOOKING, BOOKED,
  IN_PROGRESS, COMPLETED, REIMBURSING, CLOSED
}

// 每个状态只能转到特定的下一个状态
const transitions = {
  DRAFT: [PENDING_APPROVAL],
  PENDING_APPROVAL: [APPROVED, DRAFT],  // 审批通过或打回
  APPROVED: [BOOKING],
  BOOKING: [BOOKED],
  // ...
};
```

**关键技术：** 有限状态机、事件驱动、数据库持久化、消息队列

---

### 4. 异常处理 & 自愈

| 异常 | 策略 |
|------|------|
| 航班取消 | 自动搜索替代航班，通知用户确认改签 |
| 酒店满房 | 搜索同城同星级备选 |
| API 失败 | 指数退避重试 → 降级 → 通知用户 |
| 价格变动 | 重新查询，超政策则提醒 |

```typescript
async function resilientCall(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try { return await fn(); }
    catch (e) {
      if (i === maxRetries - 1) return { error: e.message };
      await sleep(1000 * (i + 1));  // 指数退避
    }
  }
}
```

---

### 5. 评估与监控

**核心指标：**

| 指标 | 含义 | 目标 |
|------|------|------|
| 任务完成率 | 需求被满足的比例 | > 95% |
| 工具调用次数 | 平均每任务调用工具数 | 越少越高效 |
| 首次推荐接受率 | 用户接受第一个推荐 | > 70% |
| 端到端延迟 | 用户等待时间 | < 15s |
| Token 消耗 | 单次请求成本 | 持续优化 |

**评估方法：**
- 测试用例集（正常流程 + 边界场景）
- LLM-as-Judge（用另一个 LLM 评估输出质量）
- A/B 测试（不同 prompt/模型/策略对比）

---

## 四、学习路线

```
第 1 阶段：基础 Agent ✅
  ├── Agentic Loop（Claude tool_use 循环）
  ├── Tool 定义（JSON Schema）
  └── System Prompt 设计

第 2 阶段：Multi-Agent ✅
  ├── Orchestrator + 子 Agent 拆分
  ├── 并行调度（Promise.all）
  ├── 模型分层（Sonnet 调度 + Haiku 执行）
  ├── 分级容错（核心中断 vs 非核心降级）
  └── SSE 进度可视化

第 3 阶段：增强能力
  ├── Planning（显式规划 + 反思）
  ├── Memory（短期 + 长期记忆）
  └── 异常自愈（重试 + 降级 + 改签）

第 4 阶段：生产化
  ├── 工作流引擎（状态机）
  ├── 数据库持久化
  ├── 评估与监控
  └── 安全与权限
```

---

## 五、推荐资源

| 资源 | 说明 |
|------|------|
| [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Anthropic 官方 Agent 设计模式总结 |
| [Anthropic Tool Use 文档](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview) | tool_use API 详细文档 |
| [Anthropic Agent SDK](https://github.com/anthropics/agent-sdk) | 官方多 Agent 开发框架 |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 基于图的 Agent 工作流编排 |
| [Lilian Weng: LLM Powered Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) | 经典综述：Agent = Planning + Memory + Tool Use |

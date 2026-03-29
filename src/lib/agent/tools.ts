import OpenAI from "openai";

export const tools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "consult_policy_agent",
      description:
        "调用差旅政策专家 Agent，查询指定职级的差旅预算限制、允许舱位和首选航空公司。",
      parameters: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            description: "给政策 Agent 的指令，如'查询 senior 职级的差旅政策'",
          },
        },
        required: ["instruction"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "consult_flight_agent",
      description:
        "调用机票专员 Agent，搜索航班或预订机票。搜索时需说明出发地、目的地、日期；预订时需说明航班ID和乘客姓名。",
      parameters: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            description: "给机票 Agent 的指令，如'搜索2026-03-30从北京到上海的航班'或'预订航班FL001，乘客张三'",
          },
        },
        required: ["instruction"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "consult_hotel_agent",
      description:
        "调用酒店专员 Agent，搜索酒店或预订酒店。搜索时需说明城市、入住和退房日期；预订时需说明酒店ID、客人姓名和日期。",
      parameters: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            description: "给酒店 Agent 的指令，如'搜索上海2026-03-30入住、2026-04-02退房的酒店'",
          },
        },
        required: ["instruction"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "consult_car_agent",
      description:
        "调用租车专员 Agent，搜索可租车辆或预订租车。搜索时需说明城市、取车和还车日期；预订时需说明车辆ID、租车人姓名和日期。",
      parameters: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            description: "给租车 Agent 的指令，如'搜索上海2026-03-30取车、2026-04-02还车的可用车辆'",
          },
        },
        required: ["instruction"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "consult_weather_agent",
      description:
        "调用天气专家 Agent，查询出差期间目的地的天气预报、穿衣建议和携带物品提醒。",
      parameters: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            description: "给天气 Agent 的指令，如'查询上海2026-03-30到2026-04-02的天气'",
          },
        },
        required: ["instruction"],
      },
    },
  },
];

import { Hotel } from "../types";

export const mockHotels: Hotel[] = [
  // 上海
  { id: "HT001", name: "上海和平饭店", city: "上海", address: "南京东路20号", starRating: 5, pricePerNight: 1200, roomType: "豪华大床房", amenities: ["WiFi", "早餐", "健身房", "泳池"], roomsAvailable: 5 },
  { id: "HT002", name: "上海浦东假日酒店", city: "上海", address: "浦东新区东方路899号", starRating: 4, pricePerNight: 580, roomType: "标准双床房", amenities: ["WiFi", "早餐", "健身房"], roomsAvailable: 12 },
  { id: "HT003", name: "全季酒店(上海陆家嘴店)", city: "上海", address: "浦东南路1088号", starRating: 3, pricePerNight: 380, roomType: "商务大床房", amenities: ["WiFi", "早餐"], roomsAvailable: 20 },
  { id: "HT004", name: "如家酒店(上海人民广场店)", city: "上海", address: "黄浦区福州路108号", starRating: 3, pricePerNight: 320, roomType: "标准大床房", amenities: ["WiFi"], roomsAvailable: 15 },
  { id: "HT005", name: "上海外滩华尔道夫酒店", city: "上海", address: "中山东一路2号", starRating: 5, pricePerNight: 2200, roomType: "外滩景观房", amenities: ["WiFi", "早餐", "健身房", "泳池", "SPA"], roomsAvailable: 3 },

  // 北京
  { id: "HT006", name: "北京王府井希尔顿", city: "北京", address: "王府井大街8号", starRating: 5, pricePerNight: 1100, roomType: "豪华大床房", amenities: ["WiFi", "早餐", "健身房", "泳池"], roomsAvailable: 8 },
  { id: "HT007", name: "亚朵酒店(北京国贸店)", city: "北京", address: "朝阳区建国门外大街22号", starRating: 4, pricePerNight: 520, roomType: "几木大床房", amenities: ["WiFi", "早餐", "健身房"], roomsAvailable: 10 },
  { id: "HT008", name: "全季酒店(北京中关村店)", city: "北京", address: "海淀区中关村大街28号", starRating: 3, pricePerNight: 360, roomType: "商务大床房", amenities: ["WiFi", "早餐"], roomsAvailable: 18 },

  // 广州
  { id: "HT009", name: "广州白天鹅宾馆", city: "广州", address: "沙面南街1号", starRating: 5, pricePerNight: 980, roomType: "江景大床房", amenities: ["WiFi", "早餐", "健身房", "泳池"], roomsAvailable: 6 },
  { id: "HT010", name: "维也纳酒店(广州天河城店)", city: "广州", address: "天河路228号", starRating: 4, pricePerNight: 450, roomType: "商务大床房", amenities: ["WiFi", "早餐"], roomsAvailable: 14 },
  { id: "HT011", name: "如家酒店(广州北京路店)", city: "广州", address: "北京路180号", starRating: 3, pricePerNight: 280, roomType: "标准大床房", amenities: ["WiFi"], roomsAvailable: 22 },

  // 深圳
  { id: "HT012", name: "深圳瑞吉酒店", city: "深圳", address: "福田区深南大道5016号", starRating: 5, pricePerNight: 1350, roomType: "豪华城景房", amenities: ["WiFi", "早餐", "健身房", "泳池", "SPA"], roomsAvailable: 4 },
  { id: "HT013", name: "亚朵酒店(深圳科技园店)", city: "深圳", address: "南山区科技南路16号", starRating: 4, pricePerNight: 490, roomType: "几木大床房", amenities: ["WiFi", "早餐", "健身房"], roomsAvailable: 11 },
  { id: "HT014", name: "全季酒店(深圳华强北店)", city: "深圳", address: "福田区华强北路1002号", starRating: 3, pricePerNight: 350, roomType: "商务大床房", amenities: ["WiFi", "早餐"], roomsAvailable: 16 },

  // 成都
  { id: "HT015", name: "成都香格里拉大酒店", city: "成都", address: "锦江区滨江东路9号", starRating: 5, pricePerNight: 900, roomType: "豪华江景房", amenities: ["WiFi", "早餐", "健身房", "泳池"], roomsAvailable: 7 },
  { id: "HT016", name: "亚朵酒店(成都春熙路店)", city: "成都", address: "锦江区红星路三段1号", starRating: 4, pricePerNight: 420, roomType: "几木大床房", amenities: ["WiFi", "早餐", "健身房"], roomsAvailable: 13 },
  { id: "HT017", name: "如家酒店(成都宽窄巷子店)", city: "成都", address: "青羊区长顺街88号", starRating: 3, pricePerNight: 260, roomType: "标准大床房", amenities: ["WiFi"], roomsAvailable: 19 },

  // 杭州
  { id: "HT018", name: "杭州西湖国宾馆", city: "杭州", address: "杨公堤18号", starRating: 5, pricePerNight: 1500, roomType: "湖景套房", amenities: ["WiFi", "早餐", "健身房", "泳池", "SPA"], roomsAvailable: 2 },
  { id: "HT019", name: "全季酒店(杭州西湖店)", city: "杭州", address: "上城区延安路398号", starRating: 3, pricePerNight: 400, roomType: "商务大床房", amenities: ["WiFi", "早餐"], roomsAvailable: 17 },
  { id: "HT020", name: "亚朵酒店(杭州滨江店)", city: "杭州", address: "滨江区江南大道588号", starRating: 4, pricePerNight: 460, roomType: "几木大床房", amenities: ["WiFi", "早餐", "健身房"], roomsAvailable: 9 },
];

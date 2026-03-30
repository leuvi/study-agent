import { Flight } from "../types";

export const mockFlights: Flight[] = [
  // 北京 → 上海
  { id: "FL001", airline: "中国国航", flightNumber: "CA1501", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "07:00", arrivalTime: "09:20", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 45 },
  { id: "FL002", airline: "东方航空", flightNumber: "MU5101", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "08:30", arrivalTime: "10:50", duration: 140, price: 960, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL003", airline: "中国国航", flightNumber: "CA1505", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "12:00", arrivalTime: "14:20", duration: 140, price: 1250, cabinClass: "economy", seatsAvailable: 18 },
  { id: "FL004", airline: "南方航空", flightNumber: "CZ3501", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "14:30", arrivalTime: "16:50", duration: 140, price: 1180, cabinClass: "economy", seatsAvailable: 27 },
  { id: "FL005", airline: "中国国航", flightNumber: "CA1509", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "18:00", arrivalTime: "20:20", duration: 140, price: 1380, cabinClass: "economy", seatsAvailable: 12 },
  { id: "FL006", airline: "中国国航", flightNumber: "CA1521", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "09:00", arrivalTime: "11:20", duration: 140, price: 2880, cabinClass: "business", seatsAvailable: 8 },
  { id: "FL007", airline: "东方航空", flightNumber: "MU5111", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "10:00", arrivalTime: "12:20", duration: 140, price: 3200, cabinClass: "business", seatsAvailable: 6 },
  { id: "FL008", airline: "中国国航", flightNumber: "CA1531", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 5200, cabinClass: "first", seatsAvailable: 4 },

  // 上海 → 北京
  { id: "FL009", airline: "中国国航", flightNumber: "CA1502", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL010", airline: "东方航空", flightNumber: "MU5102", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "11:00", arrivalTime: "13:20", duration: 140, price: 990, cabinClass: "economy", seatsAvailable: 25 },
  { id: "FL011", airline: "南方航空", flightNumber: "CZ3502", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "16:00", arrivalTime: "18:20", duration: 140, price: 1150, cabinClass: "economy", seatsAvailable: 20 },

  // 北京 → 广州
  { id: "FL012", airline: "南方航空", flightNumber: "CZ3101", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "11:10", duration: 190, price: 1450, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL013", airline: "中国国航", flightNumber: "CA1301", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "13:00", arrivalTime: "16:10", duration: 190, price: 1380, cabinClass: "economy", seatsAvailable: 22 },
  { id: "FL014", airline: "南方航空", flightNumber: "CZ3121", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "09:30", arrivalTime: "12:40", duration: 190, price: 3500, cabinClass: "business", seatsAvailable: 5 },

  // 北京 → 深圳
  { id: "FL015", airline: "南方航空", flightNumber: "CZ3201", origin: "北京", originCode: "PEK", destination: "深圳", destinationCode: "SZX", departureTime: "07:30", arrivalTime: "10:50", duration: 200, price: 1520, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL016", airline: "中国国航", flightNumber: "CA1351", origin: "北京", originCode: "PEK", destination: "深圳", destinationCode: "SZX", departureTime: "14:00", arrivalTime: "17:20", duration: 200, price: 1480, cabinClass: "economy", seatsAvailable: 19 },

  // 北京 → 成都
  { id: "FL017", airline: "中国国航", flightNumber: "CA4101", origin: "北京", originCode: "PEK", destination: "成都", destinationCode: "CTU", departureTime: "08:30", arrivalTime: "11:20", duration: 170, price: 1350, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL018", airline: "四川航空", flightNumber: "3U8001", origin: "北京", originCode: "PEK", destination: "成都", destinationCode: "CTU", departureTime: "15:00", arrivalTime: "17:50", duration: 170, price: 1200, cabinClass: "economy", seatsAvailable: 40 },

  // 上海 → 广州
  { id: "FL019", airline: "东方航空", flightNumber: "MU5301", origin: "上海", originCode: "PVG", destination: "广州", destinationCode: "CAN", departureTime: "09:00", arrivalTime: "11:30", duration: 150, price: 1280, cabinClass: "economy", seatsAvailable: 33 },
  { id: "FL020", airline: "南方航空", flightNumber: "CZ3521", origin: "上海", originCode: "PVG", destination: "广州", destinationCode: "CAN", departureTime: "17:00", arrivalTime: "19:30", duration: 150, price: 1180, cabinClass: "economy", seatsAvailable: 21 },

  // 上海 → 深圳
  { id: "FL021", airline: "东方航空", flightNumber: "MU5351", origin: "上海", originCode: "PVG", destination: "深圳", destinationCode: "SZX", departureTime: "10:00", arrivalTime: "12:40", duration: 160, price: 1320, cabinClass: "economy", seatsAvailable: 26 },

  // 上海 → 成都
  { id: "FL022", airline: "四川航空", flightNumber: "3U8501", origin: "上海", originCode: "PVG", destination: "成都", destinationCode: "CTU", departureTime: "08:00", arrivalTime: "11:10", duration: 190, price: 1400, cabinClass: "economy", seatsAvailable: 31 },

  // 广州 → 北京
  { id: "FL023", airline: "南方航空", flightNumber: "CZ3102", origin: "广州", originCode: "CAN", destination: "北京", destinationCode: "PEK", departureTime: "07:00", arrivalTime: "10:10", duration: 190, price: 1420, cabinClass: "economy", seatsAvailable: 29 },

  // 深圳 → 上海
  { id: "FL024", airline: "东方航空", flightNumber: "MU5352", origin: "深圳", originCode: "SZX", destination: "上海", destinationCode: "PVG", departureTime: "12:00", arrivalTime: "14:40", duration: 160, price: 1300, cabinClass: "economy", seatsAvailable: 24 },

  // 成都 → 北京
  { id: "FL025", airline: "中国国航", flightNumber: "CA4102", origin: "成都", originCode: "CTU", destination: "北京", destinationCode: "PEK", departureTime: "09:00", arrivalTime: "11:50", duration: 170, price: 1380, cabinClass: "economy", seatsAvailable: 36 },

  // 杭州相关
  { id: "FL026", airline: "东方航空", flightNumber: "MU2151", origin: "北京", originCode: "PEK", destination: "杭州", destinationCode: "HGH", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 1100, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL027", airline: "中国国航", flightNumber: "CA1701", origin: "北京", originCode: "PEK", destination: "杭州", destinationCode: "HGH", departureTime: "14:30", arrivalTime: "16:40", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 37 },
  { id: "FL028", airline: "东方航空", flightNumber: "MU2152", origin: "杭州", originCode: "HGH", destination: "北京", destinationCode: "PEK", departureTime: "18:00", arrivalTime: "20:10", duration: 130, price: 1080, cabinClass: "economy", seatsAvailable: 30 },

  // === 以下为新增航线 ===

  // 北京 → 武汉
  { id: "FL029", airline: "南方航空", flightNumber: "CZ3401", origin: "北京", originCode: "PEK", destination: "武汉", destinationCode: "WUH", departureTime: "07:00", arrivalTime: "09:10", duration: 130, price: 980, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL030", airline: "中国国航", flightNumber: "CA1801", origin: "北京", originCode: "PEK", destination: "武汉", destinationCode: "WUH", departureTime: "10:30", arrivalTime: "12:40", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL031", airline: "东方航空", flightNumber: "MU2301", origin: "北京", originCode: "PEK", destination: "武汉", destinationCode: "WUH", departureTime: "15:00", arrivalTime: "17:10", duration: 130, price: 1120, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL032", airline: "中国国航", flightNumber: "CA1821", origin: "北京", originCode: "PEK", destination: "武汉", destinationCode: "WUH", departureTime: "09:00", arrivalTime: "11:10", duration: 130, price: 2680, cabinClass: "business", seatsAvailable: 6 },

  // 武汉 → 北京
  { id: "FL033", airline: "南方航空", flightNumber: "CZ3402", origin: "武汉", originCode: "WUH", destination: "北京", destinationCode: "PEK", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 960, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL034", airline: "中国国航", flightNumber: "CA1802", origin: "武汉", originCode: "WUH", destination: "北京", destinationCode: "PEK", departureTime: "14:00", arrivalTime: "16:10", duration: 130, price: 1020, cabinClass: "economy", seatsAvailable: 30 },

  // 北京 → 西安
  { id: "FL035", airline: "中国国航", flightNumber: "CA1201", origin: "北京", originCode: "PEK", destination: "西安", destinationCode: "XIY", departureTime: "07:30", arrivalTime: "09:40", duration: 130, price: 920, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL036", airline: "海南航空", flightNumber: "HU7601", origin: "北京", originCode: "PEK", destination: "西安", destinationCode: "XIY", departureTime: "11:00", arrivalTime: "13:10", duration: 130, price: 880, cabinClass: "economy", seatsAvailable: 45 },
  { id: "FL037", airline: "东方航空", flightNumber: "MU2201", origin: "北京", originCode: "PEK", destination: "西安", destinationCode: "XIY", departureTime: "16:30", arrivalTime: "18:40", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 22 },
  { id: "FL038", airline: "中国国航", flightNumber: "CA1221", origin: "北京", originCode: "PEK", destination: "西安", destinationCode: "XIY", departureTime: "08:30", arrivalTime: "10:40", duration: 130, price: 2580, cabinClass: "business", seatsAvailable: 7 },

  // 西安 → 北京
  { id: "FL039", airline: "中国国航", flightNumber: "CA1202", origin: "西安", originCode: "XIY", destination: "北京", destinationCode: "PEK", departureTime: "07:00", arrivalTime: "09:10", duration: 130, price: 900, cabinClass: "economy", seatsAvailable: 36 },
  { id: "FL040", airline: "海南航空", flightNumber: "HU7602", origin: "西安", originCode: "XIY", destination: "北京", destinationCode: "PEK", departureTime: "13:00", arrivalTime: "15:10", duration: 130, price: 950, cabinClass: "economy", seatsAvailable: 33 },

  // 北京 → 重庆
  { id: "FL041", airline: "中国国航", flightNumber: "CA4201", origin: "北京", originCode: "PEK", destination: "重庆", destinationCode: "CKG", departureTime: "08:00", arrivalTime: "10:40", duration: 160, price: 1280, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL042", airline: "四川航空", flightNumber: "3U8101", origin: "北京", originCode: "PEK", destination: "重庆", destinationCode: "CKG", departureTime: "14:00", arrivalTime: "16:40", duration: 160, price: 1150, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL043", airline: "南方航空", flightNumber: "CZ3601", origin: "北京", originCode: "PEK", destination: "重庆", destinationCode: "CKG", departureTime: "19:00", arrivalTime: "21:40", duration: 160, price: 1350, cabinClass: "economy", seatsAvailable: 15 },

  // 重庆 → 北京
  { id: "FL044", airline: "中国国航", flightNumber: "CA4202", origin: "重庆", originCode: "CKG", destination: "北京", destinationCode: "PEK", departureTime: "07:30", arrivalTime: "10:10", duration: 160, price: 1250, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL045", airline: "四川航空", flightNumber: "3U8102", origin: "重庆", originCode: "CKG", destination: "北京", destinationCode: "PEK", departureTime: "15:30", arrivalTime: "18:10", duration: 160, price: 1180, cabinClass: "economy", seatsAvailable: 25 },

  // 北京 → 南京
  { id: "FL046", airline: "中国国航", flightNumber: "CA1601", origin: "北京", originCode: "PEK", destination: "南京", destinationCode: "NKG", departureTime: "07:00", arrivalTime: "09:00", duration: 120, price: 880, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL047", airline: "东方航空", flightNumber: "MU2801", origin: "北京", originCode: "PEK", destination: "南京", destinationCode: "NKG", departureTime: "12:00", arrivalTime: "14:00", duration: 120, price: 950, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL048", airline: "南方航空", flightNumber: "CZ3701", origin: "北京", originCode: "PEK", destination: "南京", destinationCode: "NKG", departureTime: "17:30", arrivalTime: "19:30", duration: 120, price: 1080, cabinClass: "economy", seatsAvailable: 18 },

  // 南京 → 北京
  { id: "FL049", airline: "中国国航", flightNumber: "CA1602", origin: "南京", originCode: "NKG", destination: "北京", destinationCode: "PEK", departureTime: "08:00", arrivalTime: "10:00", duration: 120, price: 860, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL050", airline: "东方航空", flightNumber: "MU2802", origin: "南京", originCode: "NKG", destination: "北京", destinationCode: "PEK", departureTime: "14:30", arrivalTime: "16:30", duration: 120, price: 920, cabinClass: "economy", seatsAvailable: 30 },

  // 北京 → 长沙
  { id: "FL051", airline: "南方航空", flightNumber: "CZ3301", origin: "北京", originCode: "PEK", destination: "长沙", destinationCode: "CSX", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 36 },
  { id: "FL052", airline: "中国国航", flightNumber: "CA1901", origin: "北京", originCode: "PEK", destination: "长沙", destinationCode: "CSX", departureTime: "14:00", arrivalTime: "16:20", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 28 },

  // 长沙 → 北京
  { id: "FL053", airline: "南方航空", flightNumber: "CZ3302", origin: "长沙", originCode: "CSX", destination: "北京", destinationCode: "PEK", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1020, cabinClass: "economy", seatsAvailable: 33 },
  { id: "FL054", airline: "中国国航", flightNumber: "CA1902", origin: "长沙", originCode: "CSX", destination: "北京", destinationCode: "PEK", departureTime: "16:00", arrivalTime: "18:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 26 },

  // 北京 → 青岛
  { id: "FL055", airline: "中国国航", flightNumber: "CA1571", origin: "北京", originCode: "PEK", destination: "青岛", destinationCode: "TAO", departureTime: "08:30", arrivalTime: "09:50", duration: 80, price: 680, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL056", airline: "东方航空", flightNumber: "MU5851", origin: "北京", originCode: "PEK", destination: "青岛", destinationCode: "TAO", departureTime: "14:00", arrivalTime: "15:20", duration: 80, price: 720, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL057", airline: "海南航空", flightNumber: "HU7201", origin: "北京", originCode: "PEK", destination: "青岛", destinationCode: "TAO", departureTime: "18:30", arrivalTime: "19:50", duration: 80, price: 760, cabinClass: "economy", seatsAvailable: 25 },

  // 青岛 → 北京
  { id: "FL058", airline: "中国国航", flightNumber: "CA1572", origin: "青岛", originCode: "TAO", destination: "北京", destinationCode: "PEK", departureTime: "07:00", arrivalTime: "08:20", duration: 80, price: 660, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL059", airline: "东方航空", flightNumber: "MU5852", origin: "青岛", originCode: "TAO", destination: "北京", destinationCode: "PEK", departureTime: "16:00", arrivalTime: "17:20", duration: 80, price: 700, cabinClass: "economy", seatsAvailable: 32 },

  // 北京 → 大连
  { id: "FL060", airline: "中国国航", flightNumber: "CA1661", origin: "北京", originCode: "PEK", destination: "大连", destinationCode: "DLC", departureTime: "07:30", arrivalTime: "09:00", duration: 90, price: 720, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL061", airline: "南方航空", flightNumber: "CZ6101", origin: "北京", originCode: "PEK", destination: "大连", destinationCode: "DLC", departureTime: "13:00", arrivalTime: "14:30", duration: 90, price: 680, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL062", airline: "海南航空", flightNumber: "HU7301", origin: "北京", originCode: "PEK", destination: "大连", destinationCode: "DLC", departureTime: "18:00", arrivalTime: "19:30", duration: 90, price: 750, cabinClass: "economy", seatsAvailable: 28 },

  // 大连 → 北京
  { id: "FL063", airline: "中国国航", flightNumber: "CA1662", origin: "大连", originCode: "DLC", destination: "北京", destinationCode: "PEK", departureTime: "08:00", arrivalTime: "09:30", duration: 90, price: 700, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL064", airline: "南方航空", flightNumber: "CZ6102", origin: "大连", originCode: "DLC", destination: "北京", destinationCode: "PEK", departureTime: "15:00", arrivalTime: "16:30", duration: 90, price: 720, cabinClass: "economy", seatsAvailable: 30 },

  // 北京 → 厦门
  { id: "FL065", airline: "厦门航空", flightNumber: "MF8101", origin: "北京", originCode: "PEK", destination: "厦门", destinationCode: "XMN", departureTime: "08:00", arrivalTime: "10:50", duration: 170, price: 1320, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL066", airline: "中国国航", flightNumber: "CA1951", origin: "北京", originCode: "PEK", destination: "厦门", destinationCode: "XMN", departureTime: "14:30", arrivalTime: "17:20", duration: 170, price: 1280, cabinClass: "economy", seatsAvailable: 24 },

  // 厦门 → 北京
  { id: "FL067", airline: "厦门航空", flightNumber: "MF8102", origin: "厦门", originCode: "XMN", destination: "北京", destinationCode: "PEK", departureTime: "07:00", arrivalTime: "09:50", duration: 170, price: 1300, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL068", airline: "中国国航", flightNumber: "CA1952", origin: "厦门", originCode: "XMN", destination: "北京", destinationCode: "PEK", departureTime: "16:00", arrivalTime: "18:50", duration: 170, price: 1350, cabinClass: "economy", seatsAvailable: 20 },

  // 北京 → 昆明
  { id: "FL069", airline: "中国国航", flightNumber: "CA4701", origin: "北京", originCode: "PEK", destination: "昆明", destinationCode: "KMG", departureTime: "07:30", arrivalTime: "10:50", duration: 200, price: 1580, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL070", airline: "东方航空", flightNumber: "MU5701", origin: "北京", originCode: "PEK", destination: "昆明", destinationCode: "KMG", departureTime: "13:00", arrivalTime: "16:20", duration: 200, price: 1520, cabinClass: "economy", seatsAvailable: 25 },
  { id: "FL071", airline: "中国国航", flightNumber: "CA4721", origin: "北京", originCode: "PEK", destination: "昆明", destinationCode: "KMG", departureTime: "09:00", arrivalTime: "12:20", duration: 200, price: 3800, cabinClass: "business", seatsAvailable: 5 },

  // 昆明 → 北京
  { id: "FL072", airline: "中国国航", flightNumber: "CA4702", origin: "昆明", originCode: "KMG", destination: "北京", destinationCode: "PEK", departureTime: "08:00", arrivalTime: "11:20", duration: 200, price: 1550, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL073", airline: "东方航空", flightNumber: "MU5702", origin: "昆明", originCode: "KMG", destination: "北京", destinationCode: "PEK", departureTime: "15:00", arrivalTime: "18:20", duration: 200, price: 1600, cabinClass: "economy", seatsAvailable: 22 },

  // 上海 → 武汉
  { id: "FL074", airline: "东方航空", flightNumber: "MU2351", origin: "上海", originCode: "PVG", destination: "武汉", destinationCode: "WUH", departureTime: "08:00", arrivalTime: "09:50", duration: 110, price: 850, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL075", airline: "吉祥航空", flightNumber: "HO1201", origin: "上海", originCode: "PVG", destination: "武汉", destinationCode: "WUH", departureTime: "13:30", arrivalTime: "15:20", duration: 110, price: 780, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL076", airline: "南方航空", flightNumber: "CZ3451", origin: "上海", originCode: "PVG", destination: "武汉", destinationCode: "WUH", departureTime: "18:00", arrivalTime: "19:50", duration: 110, price: 920, cabinClass: "economy", seatsAvailable: 20 },

  // 武汉 → 上海
  { id: "FL077", airline: "东方航空", flightNumber: "MU2352", origin: "武汉", originCode: "WUH", destination: "上海", destinationCode: "PVG", departureTime: "07:30", arrivalTime: "09:20", duration: 110, price: 830, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL078", airline: "吉祥航空", flightNumber: "HO1202", origin: "武汉", originCode: "WUH", destination: "上海", destinationCode: "PVG", departureTime: "14:00", arrivalTime: "15:50", duration: 110, price: 800, cabinClass: "economy", seatsAvailable: 30 },

  // 上海 → 西安
  { id: "FL079", airline: "东方航空", flightNumber: "MU2251", origin: "上海", originCode: "PVG", destination: "西安", destinationCode: "XIY", departureTime: "08:30", arrivalTime: "11:00", duration: 150, price: 1180, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL080", airline: "春秋航空", flightNumber: "9C8501", origin: "上海", originCode: "PVG", destination: "西安", destinationCode: "XIY", departureTime: "14:00", arrivalTime: "16:30", duration: 150, price: 680, cabinClass: "economy", seatsAvailable: 48 },
  { id: "FL081", airline: "中国国航", flightNumber: "CA1251", origin: "上海", originCode: "PVG", destination: "西安", destinationCode: "XIY", departureTime: "19:00", arrivalTime: "21:30", duration: 150, price: 1250, cabinClass: "economy", seatsAvailable: 18 },

  // 西安 → 上海
  { id: "FL082", airline: "东方航空", flightNumber: "MU2252", origin: "西安", originCode: "XIY", destination: "上海", destinationCode: "PVG", departureTime: "07:00", arrivalTime: "09:30", duration: 150, price: 1150, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL083", airline: "春秋航空", flightNumber: "9C8502", origin: "西安", originCode: "XIY", destination: "上海", destinationCode: "PVG", departureTime: "15:00", arrivalTime: "17:30", duration: 150, price: 700, cabinClass: "economy", seatsAvailable: 45 },

  // 上海 → 重庆
  { id: "FL084", airline: "东方航空", flightNumber: "MU5401", origin: "上海", originCode: "PVG", destination: "重庆", destinationCode: "CKG", departureTime: "09:00", arrivalTime: "12:00", duration: 180, price: 1350, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL085", airline: "四川航空", flightNumber: "3U8601", origin: "上海", originCode: "PVG", destination: "重庆", destinationCode: "CKG", departureTime: "15:30", arrivalTime: "18:30", duration: 180, price: 1200, cabinClass: "economy", seatsAvailable: 35 },

  // 重庆 → 上海
  { id: "FL086", airline: "东方航空", flightNumber: "MU5402", origin: "重庆", originCode: "CKG", destination: "上海", destinationCode: "PVG", departureTime: "08:00", arrivalTime: "11:00", duration: 180, price: 1320, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL087", airline: "四川航空", flightNumber: "3U8602", origin: "重庆", originCode: "CKG", destination: "上海", destinationCode: "PVG", departureTime: "16:00", arrivalTime: "19:00", duration: 180, price: 1250, cabinClass: "economy", seatsAvailable: 26 },

  // 上海 → 南京
  { id: "FL088", airline: "东方航空", flightNumber: "MU2851", origin: "上海", originCode: "PVG", destination: "南京", destinationCode: "NKG", departureTime: "08:00", arrivalTime: "09:10", duration: 70, price: 620, cabinClass: "economy", seatsAvailable: 45 },
  { id: "FL089", airline: "吉祥航空", flightNumber: "HO1101", origin: "上海", originCode: "PVG", destination: "南京", destinationCode: "NKG", departureTime: "14:00", arrivalTime: "15:10", duration: 70, price: 580, cabinClass: "economy", seatsAvailable: 40 },

  // 南京 → 上海
  { id: "FL090", airline: "东方航空", flightNumber: "MU2852", origin: "南京", originCode: "NKG", destination: "上海", destinationCode: "PVG", departureTime: "09:30", arrivalTime: "10:40", duration: 70, price: 600, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL091", airline: "吉祥航空", flightNumber: "HO1102", origin: "南京", originCode: "NKG", destination: "上海", destinationCode: "PVG", departureTime: "17:00", arrivalTime: "18:10", duration: 70, price: 650, cabinClass: "economy", seatsAvailable: 35 },

  // 上海 → 长沙
  { id: "FL092", airline: "东方航空", flightNumber: "MU5501", origin: "上海", originCode: "PVG", destination: "长沙", destinationCode: "CSX", departureTime: "08:30", arrivalTime: "10:30", duration: 120, price: 920, cabinClass: "economy", seatsAvailable: 33 },
  { id: "FL093", airline: "春秋航空", flightNumber: "9C8601", origin: "上海", originCode: "PVG", destination: "长沙", destinationCode: "CSX", departureTime: "15:00", arrivalTime: "17:00", duration: 120, price: 650, cabinClass: "economy", seatsAvailable: 48 },

  // 长沙 → 上海
  { id: "FL094", airline: "东方航空", flightNumber: "MU5502", origin: "长沙", originCode: "CSX", destination: "上海", destinationCode: "PVG", departureTime: "07:00", arrivalTime: "09:00", duration: 120, price: 900, cabinClass: "economy", seatsAvailable: 36 },
  { id: "FL095", airline: "春秋航空", flightNumber: "9C8602", origin: "长沙", originCode: "CSX", destination: "上海", destinationCode: "PVG", departureTime: "18:00", arrivalTime: "20:00", duration: 120, price: 680, cabinClass: "economy", seatsAvailable: 42 },

  // 上海 → 青岛
  { id: "FL096", airline: "东方航空", flightNumber: "MU5861", origin: "上海", originCode: "PVG", destination: "青岛", destinationCode: "TAO", departureTime: "09:00", arrivalTime: "10:40", duration: 100, price: 780, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL097", airline: "吉祥航空", flightNumber: "HO1301", origin: "上海", originCode: "PVG", destination: "青岛", destinationCode: "TAO", departureTime: "16:00", arrivalTime: "17:40", duration: 100, price: 820, cabinClass: "economy", seatsAvailable: 30 },

  // 青岛 → 上海
  { id: "FL098", airline: "东方航空", flightNumber: "MU5862", origin: "青岛", originCode: "TAO", destination: "上海", destinationCode: "PVG", departureTime: "08:00", arrivalTime: "09:40", duration: 100, price: 760, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL099", airline: "吉祥航空", flightNumber: "HO1302", origin: "青岛", originCode: "TAO", destination: "上海", destinationCode: "PVG", departureTime: "14:30", arrivalTime: "16:10", duration: 100, price: 800, cabinClass: "economy", seatsAvailable: 28 },

  // 上海 → 厦门
  { id: "FL100", airline: "厦门航空", flightNumber: "MF8201", origin: "上海", originCode: "PVG", destination: "厦门", destinationCode: "XMN", departureTime: "08:00", arrivalTime: "10:00", duration: 120, price: 880, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL101", airline: "东方航空", flightNumber: "MU5601", origin: "上海", originCode: "PVG", destination: "厦门", destinationCode: "XMN", departureTime: "14:30", arrivalTime: "16:30", duration: 120, price: 950, cabinClass: "economy", seatsAvailable: 28 },

  // 厦门 → 上海
  { id: "FL102", airline: "厦门航空", flightNumber: "MF8202", origin: "厦门", originCode: "XMN", destination: "上海", destinationCode: "PVG", departureTime: "07:30", arrivalTime: "09:30", duration: 120, price: 860, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL103", airline: "东方航空", flightNumber: "MU5602", origin: "厦门", originCode: "XMN", destination: "上海", destinationCode: "PVG", departureTime: "17:00", arrivalTime: "19:00", duration: 120, price: 920, cabinClass: "economy", seatsAvailable: 25 },

  // 上海 → 昆明
  { id: "FL104", airline: "东方航空", flightNumber: "MU5751", origin: "上海", originCode: "PVG", destination: "昆明", destinationCode: "KMG", departureTime: "08:00", arrivalTime: "11:20", duration: 200, price: 1480, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL105", airline: "吉祥航空", flightNumber: "HO1401", origin: "上海", originCode: "PVG", destination: "昆明", destinationCode: "KMG", departureTime: "14:00", arrivalTime: "17:20", duration: 200, price: 1380, cabinClass: "economy", seatsAvailable: 25 },

  // 昆明 → 上海
  { id: "FL106", airline: "东方航空", flightNumber: "MU5752", origin: "昆明", originCode: "KMG", destination: "上海", destinationCode: "PVG", departureTime: "07:30", arrivalTime: "10:50", duration: 200, price: 1450, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL107", airline: "吉祥航空", flightNumber: "HO1402", origin: "昆明", originCode: "KMG", destination: "上海", destinationCode: "PVG", departureTime: "15:30", arrivalTime: "18:50", duration: 200, price: 1420, cabinClass: "economy", seatsAvailable: 22 },

  // 上海 → 大连
  { id: "FL108", airline: "东方航空", flightNumber: "MU5871", origin: "上海", originCode: "PVG", destination: "大连", destinationCode: "DLC", departureTime: "09:00", arrivalTime: "11:10", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL109", airline: "春秋航空", flightNumber: "9C8701", origin: "上海", originCode: "PVG", destination: "大连", destinationCode: "DLC", departureTime: "16:00", arrivalTime: "18:10", duration: 130, price: 720, cabinClass: "economy", seatsAvailable: 45 },

  // 大连 → 上海
  { id: "FL110", airline: "东方航空", flightNumber: "MU5872", origin: "大连", originCode: "DLC", destination: "上海", destinationCode: "PVG", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 1020, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL111", airline: "春秋航空", flightNumber: "9C8702", origin: "大连", originCode: "DLC", destination: "上海", destinationCode: "PVG", departureTime: "14:30", arrivalTime: "16:40", duration: 130, price: 750, cabinClass: "economy", seatsAvailable: 40 },

  // 广州 → 上海
  { id: "FL112", airline: "南方航空", flightNumber: "CZ3522", origin: "广州", originCode: "CAN", destination: "上海", destinationCode: "PVG", departureTime: "07:00", arrivalTime: "09:30", duration: 150, price: 1200, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL113", airline: "东方航空", flightNumber: "MU5302", origin: "广州", originCode: "CAN", destination: "上海", destinationCode: "PVG", departureTime: "13:00", arrivalTime: "15:30", duration: 150, price: 1260, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL114", airline: "南方航空", flightNumber: "CZ3541", origin: "广州", originCode: "CAN", destination: "上海", destinationCode: "PVG", departureTime: "10:00", arrivalTime: "12:30", duration: 150, price: 3200, cabinClass: "business", seatsAvailable: 6 },

  // 广州 → 深圳
  { id: "FL115", airline: "南方航空", flightNumber: "CZ3901", origin: "广州", originCode: "CAN", destination: "深圳", destinationCode: "SZX", departureTime: "08:00", arrivalTime: "08:50", duration: 50, price: 480, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL116", airline: "深圳航空", flightNumber: "ZH9101", origin: "广州", originCode: "CAN", destination: "深圳", destinationCode: "SZX", departureTime: "14:00", arrivalTime: "14:50", duration: 50, price: 450, cabinClass: "economy", seatsAvailable: 35 },

  // 深圳 → 广州
  { id: "FL117", airline: "南方航空", flightNumber: "CZ3902", origin: "深圳", originCode: "SZX", destination: "广州", destinationCode: "CAN", departureTime: "09:00", arrivalTime: "09:50", duration: 50, price: 460, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL118", airline: "深圳航空", flightNumber: "ZH9102", origin: "深圳", originCode: "SZX", destination: "广州", destinationCode: "CAN", departureTime: "16:00", arrivalTime: "16:50", duration: 50, price: 480, cabinClass: "economy", seatsAvailable: 32 },

  // 广州 → 成都
  { id: "FL119", airline: "南方航空", flightNumber: "CZ3461", origin: "广州", originCode: "CAN", destination: "成都", destinationCode: "CTU", departureTime: "08:30", arrivalTime: "11:00", duration: 150, price: 1200, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL120", airline: "四川航空", flightNumber: "3U8301", origin: "广州", originCode: "CAN", destination: "成都", destinationCode: "CTU", departureTime: "15:00", arrivalTime: "17:30", duration: 150, price: 1080, cabinClass: "economy", seatsAvailable: 38 },

  // 成都 → 广州
  { id: "FL121", airline: "南方航空", flightNumber: "CZ3462", origin: "成都", originCode: "CTU", destination: "广州", destinationCode: "CAN", departureTime: "07:30", arrivalTime: "10:00", duration: 150, price: 1180, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL122", airline: "四川航空", flightNumber: "3U8302", origin: "成都", originCode: "CTU", destination: "广州", destinationCode: "CAN", departureTime: "14:00", arrivalTime: "16:30", duration: 150, price: 1100, cabinClass: "economy", seatsAvailable: 35 },

  // 广州 → 武汉
  { id: "FL123", airline: "南方航空", flightNumber: "CZ3471", origin: "广州", originCode: "CAN", destination: "武汉", destinationCode: "WUH", departureTime: "09:00", arrivalTime: "10:40", duration: 100, price: 850, cabinClass: "economy", seatsAvailable: 36 },
  { id: "FL124", airline: "深圳航空", flightNumber: "ZH9201", origin: "广州", originCode: "CAN", destination: "武汉", destinationCode: "WUH", departureTime: "16:00", arrivalTime: "17:40", duration: 100, price: 780, cabinClass: "economy", seatsAvailable: 30 },

  // 武汉 → 广州
  { id: "FL125", airline: "南方航空", flightNumber: "CZ3472", origin: "武汉", originCode: "WUH", destination: "广州", destinationCode: "CAN", departureTime: "07:30", arrivalTime: "09:10", duration: 100, price: 820, cabinClass: "economy", seatsAvailable: 33 },
  { id: "FL126", airline: "深圳航空", flightNumber: "ZH9202", origin: "武汉", originCode: "WUH", destination: "广州", destinationCode: "CAN", departureTime: "14:30", arrivalTime: "16:10", duration: 100, price: 800, cabinClass: "economy", seatsAvailable: 28 },

  // 广州 → 西安
  { id: "FL127", airline: "南方航空", flightNumber: "CZ3481", origin: "广州", originCode: "CAN", destination: "西安", destinationCode: "XIY", departureTime: "08:00", arrivalTime: "10:40", duration: 160, price: 1280, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL128", airline: "海南航空", flightNumber: "HU7801", origin: "广州", originCode: "CAN", destination: "西安", destinationCode: "XIY", departureTime: "15:00", arrivalTime: "17:40", duration: 160, price: 1200, cabinClass: "economy", seatsAvailable: 32 },

  // 西安 → 广州
  { id: "FL129", airline: "南方航空", flightNumber: "CZ3482", origin: "西安", originCode: "XIY", destination: "广州", destinationCode: "CAN", departureTime: "07:30", arrivalTime: "10:10", duration: 160, price: 1250, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL130", airline: "海南航空", flightNumber: "HU7802", origin: "西安", originCode: "XIY", destination: "广州", destinationCode: "CAN", departureTime: "14:00", arrivalTime: "16:40", duration: 160, price: 1220, cabinClass: "economy", seatsAvailable: 26 },

  // 广州 → 重庆
  { id: "FL131", airline: "南方航空", flightNumber: "CZ3491", origin: "广州", originCode: "CAN", destination: "重庆", destinationCode: "CKG", departureTime: "09:30", arrivalTime: "11:50", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 34 },
  { id: "FL132", airline: "四川航空", flightNumber: "3U8401", origin: "广州", originCode: "CAN", destination: "重庆", destinationCode: "CKG", departureTime: "16:00", arrivalTime: "18:20", duration: 140, price: 1020, cabinClass: "economy", seatsAvailable: 40 },

  // 重庆 → 广州
  { id: "FL133", airline: "南方航空", flightNumber: "CZ3492", origin: "重庆", originCode: "CKG", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL134", airline: "四川航空", flightNumber: "3U8402", origin: "重庆", originCode: "CKG", destination: "广州", destinationCode: "CAN", departureTime: "15:00", arrivalTime: "17:20", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 28 },

  // 广州 → 长沙
  { id: "FL135", airline: "南方航空", flightNumber: "CZ3351", origin: "广州", originCode: "CAN", destination: "长沙", destinationCode: "CSX", departureTime: "08:00", arrivalTime: "09:20", duration: 80, price: 650, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL136", airline: "深圳航空", flightNumber: "ZH9301", origin: "广州", originCode: "CAN", destination: "长沙", destinationCode: "CSX", departureTime: "15:00", arrivalTime: "16:20", duration: 80, price: 620, cabinClass: "economy", seatsAvailable: 35 },

  // 长沙 → 广州
  { id: "FL137", airline: "南方航空", flightNumber: "CZ3352", origin: "长沙", originCode: "CSX", destination: "广州", destinationCode: "CAN", departureTime: "07:30", arrivalTime: "08:50", duration: 80, price: 630, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL138", airline: "深圳航空", flightNumber: "ZH9302", origin: "长沙", originCode: "CSX", destination: "广州", destinationCode: "CAN", departureTime: "16:30", arrivalTime: "17:50", duration: 80, price: 650, cabinClass: "economy", seatsAvailable: 30 },

  // 广州 → 厦门
  { id: "FL139", airline: "厦门航空", flightNumber: "MF8301", origin: "广州", originCode: "CAN", destination: "厦门", destinationCode: "XMN", departureTime: "09:00", arrivalTime: "10:10", duration: 70, price: 580, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL140", airline: "南方航空", flightNumber: "CZ3361", origin: "广州", originCode: "CAN", destination: "厦门", destinationCode: "XMN", departureTime: "16:00", arrivalTime: "17:10", duration: 70, price: 620, cabinClass: "economy", seatsAvailable: 30 },

  // 厦门 → 广州
  { id: "FL141", airline: "厦门航空", flightNumber: "MF8302", origin: "厦门", originCode: "XMN", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "09:10", duration: 70, price: 560, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL142", airline: "南方航空", flightNumber: "CZ3362", origin: "厦门", originCode: "XMN", destination: "广州", destinationCode: "CAN", departureTime: "15:00", arrivalTime: "16:10", duration: 70, price: 600, cabinClass: "economy", seatsAvailable: 28 },

  // 广州 → 昆明
  { id: "FL143", airline: "南方航空", flightNumber: "CZ3501A", origin: "广州", originCode: "CAN", destination: "昆明", destinationCode: "KMG", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL144", airline: "东方航空", flightNumber: "MU5761", origin: "广州", originCode: "CAN", destination: "昆明", destinationCode: "KMG", departureTime: "14:30", arrivalTime: "16:40", duration: 130, price: 980, cabinClass: "economy", seatsAvailable: 38 },

  // 昆明 → 广州
  { id: "FL145", airline: "南方航空", flightNumber: "CZ3502A", origin: "昆明", originCode: "KMG", destination: "广州", destinationCode: "CAN", departureTime: "07:30", arrivalTime: "09:40", duration: 130, price: 1020, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL146", airline: "东方航空", flightNumber: "MU5762", origin: "昆明", originCode: "KMG", destination: "广州", destinationCode: "CAN", departureTime: "15:30", arrivalTime: "17:40", duration: 130, price: 1000, cabinClass: "economy", seatsAvailable: 25 },

  // 深圳 → 北京
  { id: "FL147", airline: "南方航空", flightNumber: "CZ3202", origin: "深圳", originCode: "SZX", destination: "北京", destinationCode: "PEK", departureTime: "07:00", arrivalTime: "10:20", duration: 200, price: 1500, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL148", airline: "深圳航空", flightNumber: "ZH9001", origin: "深圳", originCode: "SZX", destination: "北京", destinationCode: "PEK", departureTime: "13:00", arrivalTime: "16:20", duration: 200, price: 1450, cabinClass: "economy", seatsAvailable: 25 },
  { id: "FL149", airline: "中国国航", flightNumber: "CA1352", origin: "深圳", originCode: "SZX", destination: "北京", destinationCode: "PEK", departureTime: "17:00", arrivalTime: "20:20", duration: 200, price: 1580, cabinClass: "economy", seatsAvailable: 18 },
  { id: "FL150", airline: "南方航空", flightNumber: "CZ3221", origin: "深圳", originCode: "SZX", destination: "北京", destinationCode: "PEK", departureTime: "09:00", arrivalTime: "12:20", duration: 200, price: 3600, cabinClass: "business", seatsAvailable: 5 },

  // 深圳 → 成都
  { id: "FL151", airline: "深圳航空", flightNumber: "ZH9401", origin: "深圳", originCode: "SZX", destination: "成都", destinationCode: "CTU", departureTime: "08:30", arrivalTime: "11:10", duration: 160, price: 1250, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL152", airline: "四川航空", flightNumber: "3U8201", origin: "深圳", originCode: "SZX", destination: "成都", destinationCode: "CTU", departureTime: "15:00", arrivalTime: "17:40", duration: 160, price: 1150, cabinClass: "economy", seatsAvailable: 35 },

  // 成都 → 深圳
  { id: "FL153", airline: "深圳航空", flightNumber: "ZH9402", origin: "成都", originCode: "CTU", destination: "深圳", destinationCode: "SZX", departureTime: "07:00", arrivalTime: "09:40", duration: 160, price: 1220, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL154", airline: "四川航空", flightNumber: "3U8202", origin: "成都", originCode: "CTU", destination: "深圳", destinationCode: "SZX", departureTime: "14:30", arrivalTime: "17:10", duration: 160, price: 1180, cabinClass: "economy", seatsAvailable: 32 },

  // 深圳 → 武汉
  { id: "FL155", airline: "深圳航空", flightNumber: "ZH9501", origin: "深圳", originCode: "SZX", destination: "武汉", destinationCode: "WUH", departureTime: "08:00", arrivalTime: "09:50", duration: 110, price: 880, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL156", airline: "南方航空", flightNumber: "CZ3551", origin: "深圳", originCode: "SZX", destination: "武汉", destinationCode: "WUH", departureTime: "15:30", arrivalTime: "17:20", duration: 110, price: 920, cabinClass: "economy", seatsAvailable: 28 },

  // 武汉 → 深圳
  { id: "FL157", airline: "深圳航空", flightNumber: "ZH9502", origin: "武汉", originCode: "WUH", destination: "深圳", destinationCode: "SZX", departureTime: "07:30", arrivalTime: "09:20", duration: 110, price: 860, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL158", airline: "南方航空", flightNumber: "CZ3552", origin: "武汉", originCode: "WUH", destination: "深圳", destinationCode: "SZX", departureTime: "14:00", arrivalTime: "15:50", duration: 110, price: 900, cabinClass: "economy", seatsAvailable: 25 },

  // 成都 → 上海
  { id: "FL159", airline: "四川航空", flightNumber: "3U8502", origin: "成都", originCode: "CTU", destination: "上海", destinationCode: "PVG", departureTime: "07:00", arrivalTime: "10:10", duration: 190, price: 1380, cabinClass: "economy", seatsAvailable: 33 },
  { id: "FL160", airline: "东方航空", flightNumber: "MU5451", origin: "成都", originCode: "CTU", destination: "上海", destinationCode: "PVG", departureTime: "13:30", arrivalTime: "16:40", duration: 190, price: 1420, cabinClass: "economy", seatsAvailable: 26 },
  { id: "FL161", airline: "中国国航", flightNumber: "CA4521", origin: "成都", originCode: "CTU", destination: "上海", destinationCode: "PVG", departureTime: "09:00", arrivalTime: "12:10", duration: 190, price: 3400, cabinClass: "business", seatsAvailable: 6 },

  // 成都 → 重庆
  { id: "FL162", airline: "四川航空", flightNumber: "3U8701", origin: "成都", originCode: "CTU", destination: "重庆", destinationCode: "CKG", departureTime: "08:00", arrivalTime: "08:50", duration: 50, price: 420, cabinClass: "economy", seatsAvailable: 45 },
  { id: "FL163", airline: "中国国航", flightNumber: "CA4301", origin: "成都", originCode: "CTU", destination: "重庆", destinationCode: "CKG", departureTime: "14:00", arrivalTime: "14:50", duration: 50, price: 450, cabinClass: "economy", seatsAvailable: 40 },

  // 重庆 → 成都
  { id: "FL164", airline: "四川航空", flightNumber: "3U8702", origin: "重庆", originCode: "CKG", destination: "成都", destinationCode: "CTU", departureTime: "09:00", arrivalTime: "09:50", duration: 50, price: 430, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL165", airline: "中国国航", flightNumber: "CA4302", origin: "重庆", originCode: "CKG", destination: "成都", destinationCode: "CTU", departureTime: "16:00", arrivalTime: "16:50", duration: 50, price: 460, cabinClass: "economy", seatsAvailable: 38 },

  // 成都 → 昆明
  { id: "FL166", airline: "四川航空", flightNumber: "3U8801", origin: "成都", originCode: "CTU", destination: "昆明", destinationCode: "KMG", departureTime: "08:30", arrivalTime: "10:00", duration: 90, price: 720, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL167", airline: "中国国航", flightNumber: "CA4401", origin: "成都", originCode: "CTU", destination: "昆明", destinationCode: "KMG", departureTime: "15:00", arrivalTime: "16:30", duration: 90, price: 780, cabinClass: "economy", seatsAvailable: 30 },

  // 昆明 → 成都
  { id: "FL168", airline: "四川航空", flightNumber: "3U8802", origin: "昆明", originCode: "KMG", destination: "成都", destinationCode: "CTU", departureTime: "07:30", arrivalTime: "09:00", duration: 90, price: 700, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL169", airline: "中国国航", flightNumber: "CA4402", origin: "昆明", originCode: "KMG", destination: "成都", destinationCode: "CTU", departureTime: "14:00", arrivalTime: "15:30", duration: 90, price: 750, cabinClass: "economy", seatsAvailable: 28 },

  // 成都 → 西安
  { id: "FL170", airline: "四川航空", flightNumber: "3U8901", origin: "成都", originCode: "CTU", destination: "西安", destinationCode: "XIY", departureTime: "08:00", arrivalTime: "09:30", duration: 90, price: 680, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL171", airline: "中国国航", flightNumber: "CA4501", origin: "成都", originCode: "CTU", destination: "西安", destinationCode: "XIY", departureTime: "15:30", arrivalTime: "17:00", duration: 90, price: 720, cabinClass: "economy", seatsAvailable: 32 },

  // 西安 → 成都
  { id: "FL172", airline: "四川航空", flightNumber: "3U8902", origin: "西安", originCode: "XIY", destination: "成都", destinationCode: "CTU", departureTime: "07:30", arrivalTime: "09:00", duration: 90, price: 660, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL173", airline: "中国国航", flightNumber: "CA4502", origin: "西安", originCode: "XIY", destination: "成都", destinationCode: "CTU", departureTime: "14:00", arrivalTime: "15:30", duration: 90, price: 700, cabinClass: "economy", seatsAvailable: 30 },

  // 杭州 → 上海
  { id: "FL174", airline: "东方航空", flightNumber: "MU2161", origin: "杭州", originCode: "HGH", destination: "上海", destinationCode: "PVG", departureTime: "08:00", arrivalTime: "08:50", duration: 50, price: 420, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL175", airline: "春秋航空", flightNumber: "9C8801", origin: "杭州", originCode: "HGH", destination: "上海", destinationCode: "PVG", departureTime: "14:30", arrivalTime: "15:20", duration: 50, price: 350, cabinClass: "economy", seatsAvailable: 48 },

  // 上海 → 杭州
  { id: "FL176", airline: "东方航空", flightNumber: "MU2162", origin: "上海", originCode: "PVG", destination: "杭州", destinationCode: "HGH", departureTime: "09:00", arrivalTime: "09:50", duration: 50, price: 430, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL177", airline: "春秋航空", flightNumber: "9C8802", origin: "上海", originCode: "PVG", destination: "杭州", destinationCode: "HGH", departureTime: "16:00", arrivalTime: "16:50", duration: 50, price: 360, cabinClass: "economy", seatsAvailable: 45 },

  // 杭州 → 广州
  { id: "FL178", airline: "东方航空", flightNumber: "MU5311", origin: "杭州", originCode: "HGH", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL179", airline: "南方航空", flightNumber: "CZ3571", origin: "杭州", originCode: "HGH", destination: "广州", destinationCode: "CAN", departureTime: "15:00", arrivalTime: "17:20", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 25 },

  // 广州 → 杭州
  { id: "FL180", airline: "东方航空", flightNumber: "MU5312", origin: "广州", originCode: "CAN", destination: "杭州", destinationCode: "HGH", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL181", airline: "南方航空", flightNumber: "CZ3572", origin: "广州", originCode: "CAN", destination: "杭州", destinationCode: "HGH", departureTime: "14:00", arrivalTime: "16:20", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 22 },

  // 杭州 → 成都
  { id: "FL182", airline: "四川航空", flightNumber: "3U8551", origin: "杭州", originCode: "HGH", destination: "成都", destinationCode: "CTU", departureTime: "08:30", arrivalTime: "11:30", duration: 180, price: 1350, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL183", airline: "东方航空", flightNumber: "MU5461", origin: "杭州", originCode: "HGH", destination: "成都", destinationCode: "CTU", departureTime: "14:30", arrivalTime: "17:30", duration: 180, price: 1400, cabinClass: "economy", seatsAvailable: 22 },

  // 成都 → 杭州
  { id: "FL184", airline: "四川航空", flightNumber: "3U8552", origin: "成都", originCode: "CTU", destination: "杭州", destinationCode: "HGH", departureTime: "07:00", arrivalTime: "10:00", duration: 180, price: 1320, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL185", airline: "东方航空", flightNumber: "MU5462", origin: "成都", originCode: "CTU", destination: "杭州", destinationCode: "HGH", departureTime: "13:30", arrivalTime: "16:30", duration: 180, price: 1380, cabinClass: "economy", seatsAvailable: 25 },

  // 杭州 → 深圳
  { id: "FL186", airline: "深圳航空", flightNumber: "ZH9601", origin: "杭州", originCode: "HGH", destination: "深圳", destinationCode: "SZX", departureTime: "09:00", arrivalTime: "11:20", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL187", airline: "东方航空", flightNumber: "MU5371", origin: "杭州", originCode: "HGH", destination: "深圳", destinationCode: "SZX", departureTime: "15:30", arrivalTime: "17:50", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 26 },

  // 深圳 → 杭州
  { id: "FL188", airline: "深圳航空", flightNumber: "ZH9602", origin: "深圳", originCode: "SZX", destination: "杭州", destinationCode: "HGH", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL189", airline: "东方航空", flightNumber: "MU5372", origin: "深圳", originCode: "SZX", destination: "杭州", destinationCode: "HGH", departureTime: "14:00", arrivalTime: "16:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 24 },

  // 武汉 → 成都
  { id: "FL190", airline: "四川航空", flightNumber: "3U8951", origin: "武汉", originCode: "WUH", destination: "成都", destinationCode: "CTU", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 980, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL191", airline: "南方航空", flightNumber: "CZ3561", origin: "武汉", originCode: "WUH", destination: "成都", destinationCode: "CTU", departureTime: "15:00", arrivalTime: "17:10", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 28 },

  // 成都 → 武汉
  { id: "FL192", airline: "四川航空", flightNumber: "3U8952", origin: "成都", originCode: "CTU", destination: "武汉", destinationCode: "WUH", departureTime: "07:30", arrivalTime: "09:40", duration: 130, price: 960, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL193", airline: "南方航空", flightNumber: "CZ3562", origin: "成都", originCode: "CTU", destination: "武汉", destinationCode: "WUH", departureTime: "14:30", arrivalTime: "16:40", duration: 130, price: 1020, cabinClass: "economy", seatsAvailable: 25 },

  // 武汉 → 长沙
  { id: "FL194", airline: "南方航空", flightNumber: "CZ3581", origin: "武汉", originCode: "WUH", destination: "长沙", destinationCode: "CSX", departureTime: "09:00", arrivalTime: "09:50", duration: 50, price: 420, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL195", airline: "东方航空", flightNumber: "MU2381", origin: "武汉", originCode: "WUH", destination: "长沙", destinationCode: "CSX", departureTime: "16:00", arrivalTime: "16:50", duration: 50, price: 450, cabinClass: "economy", seatsAvailable: 38 },

  // 长沙 → 武汉
  { id: "FL196", airline: "南方航空", flightNumber: "CZ3582", origin: "长沙", originCode: "CSX", destination: "武汉", destinationCode: "WUH", departureTime: "08:00", arrivalTime: "08:50", duration: 50, price: 400, cabinClass: "economy", seatsAvailable: 40 },
  { id: "FL197", airline: "东方航空", flightNumber: "MU2382", origin: "长沙", originCode: "CSX", destination: "武汉", destinationCode: "WUH", departureTime: "15:00", arrivalTime: "15:50", duration: 50, price: 430, cabinClass: "economy", seatsAvailable: 35 },

  // 西安 → 重庆
  { id: "FL198", airline: "四川航空", flightNumber: "3U8111", origin: "西安", originCode: "XIY", destination: "重庆", destinationCode: "CKG", departureTime: "08:30", arrivalTime: "09:50", duration: 80, price: 620, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL199", airline: "海南航空", flightNumber: "HU7901", origin: "西安", originCode: "XIY", destination: "重庆", destinationCode: "CKG", departureTime: "15:00", arrivalTime: "16:20", duration: 80, price: 580, cabinClass: "economy", seatsAvailable: 42 },

  // 重庆 → 西安
  { id: "FL200", airline: "四川航空", flightNumber: "3U8112", origin: "重庆", originCode: "CKG", destination: "西安", destinationCode: "XIY", departureTime: "07:00", arrivalTime: "08:20", duration: 80, price: 600, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL201", airline: "海南航空", flightNumber: "HU7902", origin: "重庆", originCode: "CKG", destination: "西安", destinationCode: "XIY", departureTime: "14:00", arrivalTime: "15:20", duration: 80, price: 640, cabinClass: "economy", seatsAvailable: 30 },

  // 南京 → 广州
  { id: "FL202", airline: "南方航空", flightNumber: "CZ3711", origin: "南京", originCode: "NKG", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL203", airline: "东方航空", flightNumber: "MU2891", origin: "南京", originCode: "NKG", destination: "广州", destinationCode: "CAN", departureTime: "15:00", arrivalTime: "17:20", duration: 140, price: 1150, cabinClass: "economy", seatsAvailable: 24 },

  // 广州 → 南京
  { id: "FL204", airline: "南方航空", flightNumber: "CZ3712", origin: "广州", originCode: "CAN", destination: "南京", destinationCode: "NKG", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL205", airline: "东方航空", flightNumber: "MU2892", origin: "广州", originCode: "CAN", destination: "南京", destinationCode: "NKG", departureTime: "14:30", arrivalTime: "16:50", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 22 },

  // 南京 → 成都
  { id: "FL206", airline: "四川航空", flightNumber: "3U8561", origin: "南京", originCode: "NKG", destination: "成都", destinationCode: "CTU", departureTime: "09:00", arrivalTime: "11:40", duration: 160, price: 1250, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL207", airline: "东方航空", flightNumber: "MU2901", origin: "南京", originCode: "NKG", destination: "成都", destinationCode: "CTU", departureTime: "16:00", arrivalTime: "18:40", duration: 160, price: 1300, cabinClass: "economy", seatsAvailable: 22 },

  // 成都 → 南京
  { id: "FL208", airline: "四川航空", flightNumber: "3U8562", origin: "成都", originCode: "CTU", destination: "南京", destinationCode: "NKG", departureTime: "08:00", arrivalTime: "10:40", duration: 160, price: 1220, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL209", airline: "东方航空", flightNumber: "MU2902", origin: "成都", originCode: "CTU", destination: "南京", destinationCode: "NKG", departureTime: "14:30", arrivalTime: "17:10", duration: 160, price: 1280, cabinClass: "economy", seatsAvailable: 25 },

  // 南京 → 深圳
  { id: "FL210", airline: "深圳航空", flightNumber: "ZH9701", origin: "南京", originCode: "NKG", destination: "深圳", destinationCode: "SZX", departureTime: "08:30", arrivalTime: "10:50", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL211", airline: "东方航空", flightNumber: "MU2911", origin: "南京", originCode: "NKG", destination: "深圳", destinationCode: "SZX", departureTime: "15:30", arrivalTime: "17:50", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 24 },

  // 深圳 → 南京
  { id: "FL212", airline: "深圳航空", flightNumber: "ZH9702", origin: "深圳", originCode: "SZX", destination: "南京", destinationCode: "NKG", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL213", airline: "东方航空", flightNumber: "MU2912", origin: "深圳", originCode: "SZX", destination: "南京", destinationCode: "NKG", departureTime: "14:00", arrivalTime: "16:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 22 },

  // 长沙 → 深圳
  { id: "FL214", airline: "南方航空", flightNumber: "CZ3371", origin: "长沙", originCode: "CSX", destination: "深圳", destinationCode: "SZX", departureTime: "08:00", arrivalTime: "09:20", duration: 80, price: 680, cabinClass: "economy", seatsAvailable: 36 },
  { id: "FL215", airline: "深圳航空", flightNumber: "ZH9801", origin: "长沙", originCode: "CSX", destination: "深圳", destinationCode: "SZX", departureTime: "15:00", arrivalTime: "16:20", duration: 80, price: 650, cabinClass: "economy", seatsAvailable: 30 },

  // 深圳 → 长沙
  { id: "FL216", airline: "南方航空", flightNumber: "CZ3372", origin: "深圳", originCode: "SZX", destination: "长沙", destinationCode: "CSX", departureTime: "07:30", arrivalTime: "08:50", duration: 80, price: 660, cabinClass: "economy", seatsAvailable: 34 },
  { id: "FL217", airline: "深圳航空", flightNumber: "ZH9802", origin: "深圳", originCode: "SZX", destination: "长沙", destinationCode: "CSX", departureTime: "16:30", arrivalTime: "17:50", duration: 80, price: 680, cabinClass: "economy", seatsAvailable: 28 },

  // 青岛 → 上海 (额外航班)
  { id: "FL218", airline: "海南航空", flightNumber: "HU7211", origin: "青岛", originCode: "TAO", destination: "上海", destinationCode: "PVG", departureTime: "11:00", arrivalTime: "12:40", duration: 100, price: 820, cabinClass: "economy", seatsAvailable: 32 },

  // 青岛 → 广州
  { id: "FL219", airline: "南方航空", flightNumber: "CZ3811", origin: "青岛", originCode: "TAO", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "11:00", duration: 180, price: 1380, cabinClass: "economy", seatsAvailable: 25 },
  { id: "FL220", airline: "海南航空", flightNumber: "HU7221", origin: "青岛", originCode: "TAO", destination: "广州", destinationCode: "CAN", departureTime: "14:30", arrivalTime: "17:30", duration: 180, price: 1320, cabinClass: "economy", seatsAvailable: 30 },

  // 广州 → 青岛
  { id: "FL221", airline: "南方航空", flightNumber: "CZ3812", origin: "广州", originCode: "CAN", destination: "青岛", destinationCode: "TAO", departureTime: "07:30", arrivalTime: "10:30", duration: 180, price: 1350, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL222", airline: "海南航空", flightNumber: "HU7222", origin: "广州", originCode: "CAN", destination: "青岛", destinationCode: "TAO", departureTime: "15:00", arrivalTime: "18:00", duration: 180, price: 1400, cabinClass: "economy", seatsAvailable: 22 },

  // 大连 → 上海 (额外航班)
  { id: "FL223", airline: "海南航空", flightNumber: "HU7311", origin: "大连", originCode: "DLC", destination: "上海", destinationCode: "PVG", departureTime: "11:00", arrivalTime: "13:10", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 28 },

  // 大连 → 广州
  { id: "FL224", airline: "南方航空", flightNumber: "CZ6201", origin: "大连", originCode: "DLC", destination: "广州", destinationCode: "CAN", departureTime: "08:00", arrivalTime: "11:30", duration: 210, price: 1580, cabinClass: "economy", seatsAvailable: 24 },

  // 广州 → 大连
  { id: "FL225", airline: "南方航空", flightNumber: "CZ6202", origin: "广州", originCode: "CAN", destination: "大连", destinationCode: "DLC", departureTime: "09:00", arrivalTime: "12:30", duration: 210, price: 1620, cabinClass: "economy", seatsAvailable: 22 },

  // 厦门 → 上海 (额外航班)
  { id: "FL226", airline: "吉祥航空", flightNumber: "HO1501", origin: "厦门", originCode: "XMN", destination: "上海", destinationCode: "PVG", departureTime: "12:00", arrivalTime: "14:00", duration: 120, price: 880, cabinClass: "economy", seatsAvailable: 30 },

  // 厦门 → 深圳
  { id: "FL227", airline: "厦门航空", flightNumber: "MF8401", origin: "厦门", originCode: "XMN", destination: "深圳", destinationCode: "SZX", departureTime: "09:00", arrivalTime: "10:10", duration: 70, price: 550, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL228", airline: "深圳航空", flightNumber: "ZH9901", origin: "厦门", originCode: "XMN", destination: "深圳", destinationCode: "SZX", departureTime: "16:00", arrivalTime: "17:10", duration: 70, price: 580, cabinClass: "economy", seatsAvailable: 28 },

  // 深圳 → 厦门
  { id: "FL229", airline: "厦门航空", flightNumber: "MF8402", origin: "深圳", originCode: "SZX", destination: "厦门", destinationCode: "XMN", departureTime: "08:00", arrivalTime: "09:10", duration: 70, price: 530, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL230", airline: "深圳航空", flightNumber: "ZH9902", origin: "深圳", originCode: "SZX", destination: "厦门", destinationCode: "XMN", departureTime: "14:30", arrivalTime: "15:40", duration: 70, price: 560, cabinClass: "economy", seatsAvailable: 26 },

  // 厦门 → 成都
  { id: "FL231", airline: "厦门航空", flightNumber: "MF8501", origin: "厦门", originCode: "XMN", destination: "成都", destinationCode: "CTU", departureTime: "08:30", arrivalTime: "11:20", duration: 170, price: 1280, cabinClass: "economy", seatsAvailable: 26 },

  // 成都 → 厦门
  { id: "FL232", airline: "厦门航空", flightNumber: "MF8502", origin: "成都", originCode: "CTU", destination: "厦门", destinationCode: "XMN", departureTime: "12:00", arrivalTime: "14:50", duration: 170, price: 1300, cabinClass: "economy", seatsAvailable: 24 },

  // 昆明 → 上海 (额外航班)
  { id: "FL233", airline: "春秋航空", flightNumber: "9C8901", origin: "昆明", originCode: "KMG", destination: "上海", destinationCode: "PVG", departureTime: "11:00", arrivalTime: "14:20", duration: 200, price: 1100, cabinClass: "economy", seatsAvailable: 48 },

  // 昆明 → 深圳
  { id: "FL234", airline: "深圳航空", flightNumber: "ZH9111", origin: "昆明", originCode: "KMG", destination: "深圳", destinationCode: "SZX", departureTime: "08:00", arrivalTime: "10:10", duration: 130, price: 1050, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL235", airline: "南方航空", flightNumber: "CZ3821", origin: "昆明", originCode: "KMG", destination: "深圳", destinationCode: "SZX", departureTime: "15:00", arrivalTime: "17:10", duration: 130, price: 1100, cabinClass: "economy", seatsAvailable: 25 },

  // 深圳 → 昆明
  { id: "FL236", airline: "深圳航空", flightNumber: "ZH9112", origin: "深圳", originCode: "SZX", destination: "昆明", destinationCode: "KMG", departureTime: "07:30", arrivalTime: "09:40", duration: 130, price: 1020, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL237", airline: "南方航空", flightNumber: "CZ3822", origin: "深圳", originCode: "SZX", destination: "昆明", destinationCode: "KMG", departureTime: "14:30", arrivalTime: "16:40", duration: 130, price: 1080, cabinClass: "economy", seatsAvailable: 22 },

  // 昆明 → 重庆
  { id: "FL238", airline: "四川航空", flightNumber: "3U8121", origin: "昆明", originCode: "KMG", destination: "重庆", destinationCode: "CKG", departureTime: "08:00", arrivalTime: "09:10", duration: 70, price: 580, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL239", airline: "南方航空", flightNumber: "CZ3831", origin: "昆明", originCode: "KMG", destination: "重庆", destinationCode: "CKG", departureTime: "15:00", arrivalTime: "16:10", duration: 70, price: 620, cabinClass: "economy", seatsAvailable: 32 },

  // 重庆 → 昆明
  { id: "FL240", airline: "四川航空", flightNumber: "3U8122", origin: "重庆", originCode: "CKG", destination: "昆明", destinationCode: "KMG", departureTime: "07:30", arrivalTime: "08:40", duration: 70, price: 560, cabinClass: "economy", seatsAvailable: 35 },
  { id: "FL241", airline: "南方航空", flightNumber: "CZ3832", origin: "重庆", originCode: "CKG", destination: "昆明", destinationCode: "KMG", departureTime: "14:00", arrivalTime: "15:10", duration: 70, price: 600, cabinClass: "economy", seatsAvailable: 28 },

  // 额外热门航线补充 — 更多时间段

  // 北京 → 上海 (额外)
  { id: "FL242", airline: "海南航空", flightNumber: "HU7101", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "06:30", arrivalTime: "08:50", duration: 140, price: 920, cabinClass: "economy", seatsAvailable: 45 },
  { id: "FL243", airline: "春秋航空", flightNumber: "9C8101", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "20:00", arrivalTime: "22:20", duration: 140, price: 680, cabinClass: "economy", seatsAvailable: 50 },
  { id: "FL244", airline: "吉祥航空", flightNumber: "HO1001", origin: "北京", originCode: "PEK", destination: "上海", destinationCode: "PVG", departureTime: "16:00", arrivalTime: "18:20", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 32 },

  // 上海 → 北京 (额外)
  { id: "FL245", airline: "海南航空", flightNumber: "HU7102", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "06:00", arrivalTime: "08:20", duration: 140, price: 900, cabinClass: "economy", seatsAvailable: 42 },
  { id: "FL246", airline: "春秋航空", flightNumber: "9C8102", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "19:30", arrivalTime: "21:50", duration: 140, price: 700, cabinClass: "economy", seatsAvailable: 48 },
  { id: "FL247", airline: "吉祥航空", flightNumber: "HO1002", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "13:00", arrivalTime: "15:20", duration: 140, price: 1020, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL248", airline: "东方航空", flightNumber: "MU5121", origin: "上海", originCode: "PVG", destination: "北京", destinationCode: "PEK", departureTime: "09:00", arrivalTime: "11:20", duration: 140, price: 3100, cabinClass: "business", seatsAvailable: 6 },

  // 北京 → 广州 (额外)
  { id: "FL249", airline: "海南航空", flightNumber: "HU7401", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "06:30", arrivalTime: "09:40", duration: 190, price: 1320, cabinClass: "economy", seatsAvailable: 38 },
  { id: "FL250", airline: "深圳航空", flightNumber: "ZH9011", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "17:00", arrivalTime: "20:10", duration: 190, price: 1500, cabinClass: "economy", seatsAvailable: 20 },
  { id: "FL251", airline: "中国国航", flightNumber: "CA1311", origin: "北京", originCode: "PEK", destination: "广州", destinationCode: "CAN", departureTime: "10:00", arrivalTime: "13:10", duration: 190, price: 5600, cabinClass: "first", seatsAvailable: 3 },

  // 广州 → 北京 (额外)
  { id: "FL252", airline: "海南航空", flightNumber: "HU7402", origin: "广州", originCode: "CAN", destination: "北京", destinationCode: "PEK", departureTime: "12:00", arrivalTime: "15:10", duration: 190, price: 1380, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL253", airline: "中国国航", flightNumber: "CA1302", origin: "广州", originCode: "CAN", destination: "北京", destinationCode: "PEK", departureTime: "17:30", arrivalTime: "20:40", duration: 190, price: 1480, cabinClass: "economy", seatsAvailable: 22 },
  { id: "FL254", airline: "南方航空", flightNumber: "CZ3131", origin: "广州", originCode: "CAN", destination: "北京", destinationCode: "PEK", departureTime: "08:30", arrivalTime: "11:40", duration: 190, price: 3600, cabinClass: "business", seatsAvailable: 5 },

  // 北京 → 深圳 (额外)
  { id: "FL255", airline: "深圳航空", flightNumber: "ZH9021", origin: "北京", originCode: "PEK", destination: "深圳", destinationCode: "SZX", departureTime: "10:00", arrivalTime: "13:20", duration: 200, price: 1550, cabinClass: "economy", seatsAvailable: 25 },
  { id: "FL256", airline: "海南航空", flightNumber: "HU7501", origin: "北京", originCode: "PEK", destination: "深圳", destinationCode: "SZX", departureTime: "19:00", arrivalTime: "22:20", duration: 200, price: 1620, cabinClass: "economy", seatsAvailable: 18 },

  // 北京 → 成都 (额外)
  { id: "FL257", airline: "海南航空", flightNumber: "HU7701", origin: "北京", originCode: "PEK", destination: "成都", destinationCode: "CTU", departureTime: "11:00", arrivalTime: "13:50", duration: 170, price: 1280, cabinClass: "economy", seatsAvailable: 32 },
  { id: "FL258", airline: "中国国航", flightNumber: "CA4121", origin: "北京", originCode: "PEK", destination: "成都", destinationCode: "CTU", departureTime: "07:00", arrivalTime: "09:50", duration: 170, price: 3200, cabinClass: "business", seatsAvailable: 6 },

  // 成都 → 北京 (额外)
  { id: "FL259", airline: "海南航空", flightNumber: "HU7702", origin: "成都", originCode: "CTU", destination: "北京", destinationCode: "PEK", departureTime: "13:00", arrivalTime: "15:50", duration: 170, price: 1300, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL260", airline: "四川航空", flightNumber: "3U8002", origin: "成都", originCode: "CTU", destination: "北京", destinationCode: "PEK", departureTime: "17:00", arrivalTime: "19:50", duration: 170, price: 1250, cabinClass: "economy", seatsAvailable: 35 },

  // 重庆 → 广州
  { id: "FL261", airline: "海南航空", flightNumber: "HU7811", origin: "重庆", originCode: "CKG", destination: "广州", destinationCode: "CAN", departureTime: "10:00", arrivalTime: "12:20", duration: 140, price: 1100, cabinClass: "economy", seatsAvailable: 30 },

  // 重庆 → 深圳
  { id: "FL262", airline: "深圳航空", flightNumber: "ZH9121", origin: "重庆", originCode: "CKG", destination: "深圳", destinationCode: "SZX", departureTime: "08:00", arrivalTime: "10:20", duration: 140, price: 1120, cabinClass: "economy", seatsAvailable: 28 },
  { id: "FL263", airline: "四川航空", flightNumber: "3U8131", origin: "重庆", originCode: "CKG", destination: "深圳", destinationCode: "SZX", departureTime: "15:30", arrivalTime: "17:50", duration: 140, price: 1050, cabinClass: "economy", seatsAvailable: 32 },

  // 深圳 → 重庆
  { id: "FL264", airline: "深圳航空", flightNumber: "ZH9122", origin: "深圳", originCode: "SZX", destination: "重庆", destinationCode: "CKG", departureTime: "07:30", arrivalTime: "09:50", duration: 140, price: 1080, cabinClass: "economy", seatsAvailable: 30 },
  { id: "FL265", airline: "四川航空", flightNumber: "3U8132", origin: "深圳", originCode: "SZX", destination: "重庆", destinationCode: "CKG", departureTime: "14:00", arrivalTime: "16:20", duration: 140, price: 1020, cabinClass: "economy", seatsAvailable: 26 },

  // 武汉 → 西安
  { id: "FL266", airline: "东方航空", flightNumber: "MU2401", origin: "武汉", originCode: "WUH", destination: "西安", destinationCode: "XIY", departureTime: "08:30", arrivalTime: "10:10", duration: 100, price: 780, cabinClass: "economy", seatsAvailable: 35 },

  // 西安 → 武汉
  { id: "FL267", airline: "东方航空", flightNumber: "MU2402", origin: "西安", originCode: "XIY", destination: "武汉", destinationCode: "WUH", departureTime: "14:00", arrivalTime: "15:40", duration: 100, price: 800, cabinClass: "economy", seatsAvailable: 30 },

  // 长沙 → 成都
  { id: "FL268", airline: "四川航空", flightNumber: "3U8961", origin: "长沙", originCode: "CSX", destination: "成都", destinationCode: "CTU", departureTime: "09:00", arrivalTime: "11:00", duration: 120, price: 920, cabinClass: "economy", seatsAvailable: 32 },

  // 成都 → 长沙
  { id: "FL269", airline: "四川航空", flightNumber: "3U8962", origin: "成都", originCode: "CTU", destination: "长沙", destinationCode: "CSX", departureTime: "15:00", arrivalTime: "17:00", duration: 120, price: 950, cabinClass: "economy", seatsAvailable: 28 },

  // 青岛 → 成都
  { id: "FL270", airline: "海南航空", flightNumber: "HU7231", origin: "青岛", originCode: "TAO", destination: "成都", destinationCode: "CTU", departureTime: "08:00", arrivalTime: "10:50", duration: 170, price: 1350, cabinClass: "economy", seatsAvailable: 25 },

  // 成都 → 青岛
  { id: "FL271", airline: "海南航空", flightNumber: "HU7232", origin: "成都", originCode: "CTU", destination: "青岛", destinationCode: "TAO", departureTime: "14:00", arrivalTime: "16:50", duration: 170, price: 1380, cabinClass: "economy", seatsAvailable: 22 },

  // 大连 → 成都
  { id: "FL272", airline: "四川航空", flightNumber: "3U8971", origin: "大连", originCode: "DLC", destination: "成都", destinationCode: "CTU", departureTime: "09:00", arrivalTime: "12:10", duration: 190, price: 1480, cabinClass: "economy", seatsAvailable: 24 },

  // 成都 → 大连
  { id: "FL273", airline: "四川航空", flightNumber: "3U8972", origin: "成都", originCode: "CTU", destination: "大连", destinationCode: "DLC", departureTime: "15:00", arrivalTime: "18:10", duration: 190, price: 1500, cabinClass: "economy", seatsAvailable: 20 },

  // 厦门 → 武汉
  { id: "FL274", airline: "厦门航空", flightNumber: "MF8601", origin: "厦门", originCode: "XMN", destination: "武汉", destinationCode: "WUH", departureTime: "08:30", arrivalTime: "10:10", duration: 100, price: 780, cabinClass: "economy", seatsAvailable: 30 },

  // 武汉 → 厦门
  { id: "FL275", airline: "厦门航空", flightNumber: "MF8602", origin: "武汉", originCode: "WUH", destination: "厦门", destinationCode: "XMN", departureTime: "14:00", arrivalTime: "15:40", duration: 100, price: 800, cabinClass: "economy", seatsAvailable: 26 },

  // 昆明 → 长沙
  { id: "FL276", airline: "南方航空", flightNumber: "CZ3841", origin: "昆明", originCode: "KMG", destination: "长沙", destinationCode: "CSX", departureTime: "09:00", arrivalTime: "10:40", duration: 100, price: 820, cabinClass: "economy", seatsAvailable: 30 },

  // 长沙 → 昆明
  { id: "FL277", airline: "南方航空", flightNumber: "CZ3842", origin: "长沙", originCode: "CSX", destination: "昆明", destinationCode: "KMG", departureTime: "15:30", arrivalTime: "17:10", duration: 100, price: 850, cabinClass: "economy", seatsAvailable: 25 },

  // 南京 → 武汉
  { id: "FL278", airline: "东方航空", flightNumber: "MU2921", origin: "南京", originCode: "NKG", destination: "武汉", destinationCode: "WUH", departureTime: "08:00", arrivalTime: "09:10", duration: 70, price: 560, cabinClass: "economy", seatsAvailable: 38 },

  // 武汉 → 南京
  { id: "FL279", airline: "东方航空", flightNumber: "MU2922", origin: "武汉", originCode: "WUH", destination: "南京", destinationCode: "NKG", departureTime: "14:30", arrivalTime: "15:40", duration: 70, price: 580, cabinClass: "economy", seatsAvailable: 35 },

  // 大连 → 青岛
  { id: "FL280", airline: "海南航空", flightNumber: "HU7321", origin: "大连", originCode: "DLC", destination: "青岛", destinationCode: "TAO", departureTime: "09:00", arrivalTime: "10:10", duration: 70, price: 550, cabinClass: "economy", seatsAvailable: 35 },

  // 青岛 → 大连
  { id: "FL281", airline: "海南航空", flightNumber: "HU7322", origin: "青岛", originCode: "TAO", destination: "大连", destinationCode: "DLC", departureTime: "15:00", arrivalTime: "16:10", duration: 70, price: 570, cabinClass: "economy", seatsAvailable: 30 },
];

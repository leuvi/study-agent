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
];

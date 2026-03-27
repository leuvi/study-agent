import { BookingResult } from "../types";

export interface Car {
  id: string;
  company: string;
  model: string;
  type: "经济型" | "舒适型" | "商务型" | "豪华型";
  pricePerDay: number;
  seats: number;
  features: string[];
  available: boolean;
}

const mockCars: Car[] = [
  // 上海
  { id: "CAR001", company: "神州租车", model: "大众朗逸", type: "经济型", pricePerDay: 150, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR002", company: "一嗨租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 170, seats: 5, features: ["GPS导航", "倒车影像"], available: true },
  { id: "CAR003", company: "神州租车", model: "别克威朗", type: "舒适型", pricePerDay: 230, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR004", company: "一嗨租车", model: "大众帕萨特", type: "商务型", pricePerDay: 350, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR005", company: "神州租车", model: "奥迪A6L", type: "豪华型", pricePerDay: 600, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },

  // 北京
  { id: "CAR006", company: "首汽租车", model: "现代伊兰特", type: "经济型", pricePerDay: 160, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR007", company: "神州租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 250, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR008", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 450, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },

  // 广州
  { id: "CAR009", company: "一嗨租车", model: "日产轩逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR010", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 240, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },

  // 深圳
  { id: "CAR011", company: "一嗨租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR012", company: "神州租车", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 300, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源"], available: true },

  // 成都
  { id: "CAR013", company: "神州租车", model: "大众宝来", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR014", company: "一嗨租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 280, seats: 5, features: ["GPS导航", "四驱", "倒车影像"], available: true },

  // 杭州
  { id: "CAR015", company: "一嗨租车", model: "吉利帝豪", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR016", company: "神州租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 380, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
];

// 城市与可用车辆的映射
const cityCarMap: Record<string, string[]> = {
  "上海": ["CAR001", "CAR002", "CAR003", "CAR004", "CAR005"],
  "北京": ["CAR006", "CAR007", "CAR008"],
  "广州": ["CAR009", "CAR010"],
  "深圳": ["CAR011", "CAR012"],
  "成都": ["CAR013", "CAR014"],
  "杭州": ["CAR015", "CAR016"],
};

export function searchCars(
  city: string,
  pickupDate: string,
  returnDate: string
): (Car & { pickupDate: string; returnDate: string; days: number; totalPrice: number })[] {
  const days = Math.max(
    1,
    Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24))
  );

  const matchedCity = Object.keys(cityCarMap).find((c) => city.includes(c) || c.includes(city));
  if (!matchedCity) return [];

  const carIds = cityCarMap[matchedCity];
  return mockCars
    .filter((car) => carIds.includes(car.id) && car.available)
    .map((car) => ({
      ...car,
      pickupDate,
      returnDate,
      days,
      totalPrice: car.pricePerDay * days,
    }));
}

const bookedCars = new Map<string, { carId: string; renter: string; pickupDate: string; returnDate: string }>();

export function bookCar(
  carId: string,
  renterName: string,
  pickupDate: string,
  returnDate: string
): BookingResult {
  const car = mockCars.find((c) => c.id === carId);
  if (!car) {
    return { success: false, message: `车辆 ${carId} 不存在` };
  }
  if (!car.available) {
    return { success: false, message: `${car.model} 已被预订` };
  }

  car.available = false;
  const bookingId = `BK-CAR-${Date.now()}`;
  bookedCars.set(bookingId, { carId, renter: renterName, pickupDate, returnDate });

  const days = Math.max(1, Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24)));

  return {
    success: true,
    bookingId,
    message: `成功预订 ${car.company} ${car.model}（${car.type}），取车：${pickupDate}，还车：${returnDate}，共${days}天，租客：${renterName}，预订号：${bookingId}`,
  };
}

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
  // ========== 上海 (CAR001-CAR005, existing + CAR017-CAR022) ==========
  { id: "CAR001", company: "神州租车", model: "大众朗逸", type: "经济型", pricePerDay: 150, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR002", company: "一嗨租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 170, seats: 5, features: ["GPS导航", "倒车影像"], available: true },
  { id: "CAR003", company: "神州租车", model: "别克威朗", type: "舒适型", pricePerDay: 230, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR004", company: "一嗨租车", model: "大众帕萨特", type: "商务型", pricePerDay: 350, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR005", company: "神州租车", model: "奥迪A6L", type: "豪华型", pricePerDay: 600, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },
  { id: "CAR017", company: "首汽租车", model: "日产轩逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR018", company: "悟空租车", model: "本田雅阁", type: "舒适型", pricePerDay: 260, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调", "无钥匙启动"], available: true },
  { id: "CAR019", company: "联动云", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 310, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "自动空调"], available: true },
  { id: "CAR020", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 460, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调", "后排娱乐"], available: true },
  { id: "CAR021", company: "悟空租车", model: "宝马5系", type: "豪华型", pricePerDay: 700, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风", "HUD抬头显示"], available: true },
  { id: "CAR022", company: "联动云", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙", "新能源", "倒车影像"], available: true },

  // ========== 北京 (CAR006-CAR008, existing + CAR023-CAR030) ==========
  { id: "CAR006", company: "首汽租车", model: "现代伊兰特", type: "经济型", pricePerDay: 160, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR007", company: "神州租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 250, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR008", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 450, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR023", company: "神州租车", model: "大众朗逸", type: "经济型", pricePerDay: 155, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR024", company: "一嗨租车", model: "吉利帝豪", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR025", company: "悟空租车", model: "大众迈腾", type: "舒适型", pricePerDay: 270, seats: 5, features: ["GPS导航", "蓝牙", "真皮座椅", "自动空调", "倒车影像"], available: true },
  { id: "CAR026", company: "联动云", model: "比亚迪汉", type: "舒适型", pricePerDay: 290, seats: 5, features: ["GPS导航", "新能源", "自动空调", "座椅加热"], available: true },
  { id: "CAR027", company: "一嗨租车", model: "奥迪A4L", type: "商务型", pricePerDay: 400, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调", "倒车影像"], available: true },
  { id: "CAR028", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 750, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风", "柏林之声音响"], available: true },
  { id: "CAR029", company: "首汽租车", model: "特斯拉Model S", type: "豪华型", pricePerDay: 800, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "全景天窗", "座椅加热"], available: true },
  { id: "CAR030", company: "悟空租车", model: "丰田埃尔法", type: "商务型", pricePerDay: 500, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "后排娱乐", "自动空调"], available: true },

  // ========== 广州 (CAR009-CAR010, existing + CAR031-CAR039) ==========
  { id: "CAR009", company: "一嗨租车", model: "日产轩逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR010", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 240, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR031", company: "首汽租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 155, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR032", company: "悟空租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR033", company: "联动云", model: "长安逸动", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR034", company: "神州租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 255, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调", "无钥匙启动"], available: true },
  { id: "CAR035", company: "一嗨租车", model: "本田CR-V", type: "舒适型", pricePerDay: 280, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调", "四驱"], available: true },
  { id: "CAR036", company: "首汽租车", model: "大众帕萨特", type: "商务型", pricePerDay: 340, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR037", company: "悟空租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 390, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调", "BLIS盲点监测"], available: true },
  { id: "CAR038", company: "神州租车", model: "奥迪A6L", type: "豪华型", pricePerDay: 620, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "B&O音响"], available: true },
  { id: "CAR039", company: "联动云", model: "宝马5系", type: "豪华型", pricePerDay: 680, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },

  // ========== 深圳 (CAR011-CAR012, existing + CAR040-CAR048) ==========
  { id: "CAR011", company: "一嗨租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR012", company: "神州租车", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 300, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源"], available: true },
  { id: "CAR040", company: "首汽租车", model: "大众朗逸", type: "经济型", pricePerDay: 145, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR041", company: "悟空租车", model: "荣威i5", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR042", company: "联动云", model: "现代伊兰特", type: "经济型", pricePerDay: 135, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR043", company: "神州租车", model: "比亚迪汉", type: "舒适型", pricePerDay: 285, seats: 5, features: ["GPS导航", "新能源", "自动空调", "座椅加热"], available: true },
  { id: "CAR044", company: "一嗨租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 275, seats: 5, features: ["GPS导航", "四驱", "倒车影像", "自动空调"], available: true },
  { id: "CAR045", company: "首汽租车", model: "奥迪A4L", type: "商务型", pricePerDay: 410, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR046", company: "悟空租车", model: "别克GL8", type: "商务型", pricePerDay: 440, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR047", company: "联动云", model: "特斯拉Model S", type: "豪华型", pricePerDay: 820, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "全景天窗", "座椅加热"], available: true },
  { id: "CAR048", company: "神州租车", model: "保时捷Cayenne", type: "豪华型", pricePerDay: 900, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "BOSE音响", "空气悬架"], available: true },

  // ========== 成都 (CAR013-CAR014, existing + CAR049-CAR057) ==========
  { id: "CAR013", company: "神州租车", model: "大众宝来", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR014", company: "一嗨租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 280, seats: 5, features: ["GPS导航", "四驱", "倒车影像"], available: true },
  { id: "CAR049", company: "首汽租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 150, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR050", company: "悟空租车", model: "吉利帝豪", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR051", company: "联动云", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR052", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 245, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR053", company: "一嗨租车", model: "大众迈腾", type: "舒适型", pricePerDay: 260, seats: 5, features: ["GPS导航", "蓝牙", "真皮座椅", "自动空调"], available: true },
  { id: "CAR054", company: "首汽租车", model: "大众帕萨特", type: "商务型", pricePerDay: 345, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR055", company: "悟空租车", model: "奔驰V260", type: "商务型", pricePerDay: 480, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调", "后排娱乐"], available: true },
  { id: "CAR056", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 610, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "B&O音响"], available: true },
  { id: "CAR057", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 730, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },

  // ========== 杭州 (CAR015-CAR016, existing + CAR058-CAR066) ==========
  { id: "CAR015", company: "一嗨租车", model: "吉利帝豪", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR016", company: "神州租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 380, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR058", company: "首汽租车", model: "日产轩逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR059", company: "悟空租车", model: "长安逸动", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR060", company: "联动云", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 250, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR061", company: "神州租车", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 305, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "自动空调"], available: true },
  { id: "CAR062", company: "一嗨租车", model: "本田CR-V", type: "舒适型", pricePerDay: 270, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR063", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 445, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR064", company: "悟空租车", model: "宝马5系", type: "豪华型", pricePerDay: 690, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },
  { id: "CAR065", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 630, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },
  { id: "CAR066", company: "悟空租车", model: "荣威i5", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },

  // ========== 武汉 (CAR067-CAR077) ==========
  { id: "CAR067", company: "神州租车", model: "大众朗逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR068", company: "一嗨租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 155, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR069", company: "首汽租车", model: "现代伊兰特", type: "经济型", pricePerDay: 135, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR070", company: "悟空租车", model: "别克威朗", type: "舒适型", pricePerDay: 225, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR071", company: "联动云", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 245, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调", "无钥匙启动"], available: true },
  { id: "CAR072", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 240, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR073", company: "一嗨租车", model: "大众帕萨特", type: "商务型", pricePerDay: 340, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR074", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 435, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR075", company: "悟空租车", model: "奥迪A4L", type: "商务型", pricePerDay: 395, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR076", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 600, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },
  { id: "CAR077", company: "神州租车", model: "宝马5系", type: "豪华型", pricePerDay: 680, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "HUD抬头显示"], available: true },

  // ========== 西安 (CAR078-CAR088) ==========
  { id: "CAR078", company: "一嗨租车", model: "日产轩逸", type: "经济型", pricePerDay: 135, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR079", company: "首汽租车", model: "吉利帝豪", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR080", company: "悟空租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR081", company: "联动云", model: "大众朗逸", type: "经济型", pricePerDay: 145, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR082", company: "神州租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 240, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR083", company: "一嗨租车", model: "大众迈腾", type: "舒适型", pricePerDay: 255, seats: 5, features: ["GPS导航", "蓝牙", "真皮座椅", "自动空调"], available: true },
  { id: "CAR084", company: "首汽租车", model: "本田CR-V", type: "舒适型", pricePerDay: 270, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调", "四驱"], available: true },
  { id: "CAR085", company: "悟空租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 375, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR086", company: "联动云", model: "奔驰V260", type: "商务型", pricePerDay: 470, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR087", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 720, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "柏林之声音响"], available: true },
  { id: "CAR088", company: "一嗨租车", model: "保时捷Cayenne", type: "豪华型", pricePerDay: 880, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "BOSE音响", "空气悬架"], available: true },

  // ========== 重庆 (CAR089-CAR099) ==========
  { id: "CAR089", company: "神州租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 150, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR090", company: "一嗨租车", model: "长安逸动", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR091", company: "首汽租车", model: "荣威i5", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR092", company: "悟空租车", model: "别克威朗", type: "舒适型", pricePerDay: 220, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR093", company: "联动云", model: "本田雅阁", type: "舒适型", pricePerDay: 245, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR094", company: "神州租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 275, seats: 5, features: ["GPS导航", "四驱", "倒车影像", "自动空调"], available: true },
  { id: "CAR095", company: "一嗨租车", model: "大众帕萨特", type: "商务型", pricePerDay: 335, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR096", company: "首汽租车", model: "别克GL8", type: "商务型", pricePerDay: 440, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR097", company: "悟空租车", model: "丰田埃尔法", type: "商务型", pricePerDay: 490, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "后排娱乐", "自动空调"], available: true },
  { id: "CAR098", company: "联动云", model: "宝马5系", type: "豪华型", pricePerDay: 670, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },
  { id: "CAR099", company: "神州租车", model: "奥迪A6L", type: "豪华型", pricePerDay: 610, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },

  // ========== 南京 (CAR100-CAR110) ==========
  { id: "CAR100", company: "一嗨租车", model: "大众朗逸", type: "经济型", pricePerDay: 145, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR101", company: "首汽租车", model: "日产轩逸", type: "经济型", pricePerDay: 140, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR102", company: "悟空租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 128, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR103", company: "联动云", model: "现代伊兰特", type: "经济型", pricePerDay: 132, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR104", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 242, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR105", company: "一嗨租车", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 308, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "自动空调"], available: true },
  { id: "CAR106", company: "首汽租车", model: "大众迈腾", type: "舒适型", pricePerDay: 258, seats: 5, features: ["GPS导航", "蓝牙", "真皮座椅", "自动空调"], available: true },
  { id: "CAR107", company: "悟空租车", model: "奥迪A4L", type: "商务型", pricePerDay: 398, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR108", company: "联动云", model: "别克GL8", type: "商务型", pricePerDay: 438, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR109", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 740, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "柏林之声音响"], available: true },
  { id: "CAR110", company: "一嗨租车", model: "特斯拉Model S", type: "豪华型", pricePerDay: 790, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "全景天窗"], available: true },

  // ========== 长沙 (CAR111-CAR121) ==========
  { id: "CAR111", company: "神州租车", model: "吉利帝豪", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR112", company: "一嗨租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 152, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR113", company: "首汽租车", model: "长安逸动", type: "经济型", pricePerDay: 122, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR114", company: "悟空租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 242, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR115", company: "联动云", model: "比亚迪汉", type: "舒适型", pricePerDay: 280, seats: 5, features: ["GPS导航", "新能源", "自动空调", "座椅加热"], available: true },
  { id: "CAR116", company: "神州租车", model: "本田CR-V", type: "舒适型", pricePerDay: 268, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR117", company: "一嗨租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 370, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR118", company: "首汽租车", model: "大众帕萨特", type: "商务型", pricePerDay: 338, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR119", company: "悟空租车", model: "奔驰V260", type: "商务型", pricePerDay: 465, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR120", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 605, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },
  { id: "CAR121", company: "神州租车", model: "宝马5系", type: "豪华型", pricePerDay: 675, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "HUD抬头显示"], available: true },

  // ========== 青岛 (CAR122-CAR131) ==========
  { id: "CAR122", company: "一嗨租车", model: "大众朗逸", type: "经济型", pricePerDay: 142, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR123", company: "首汽租车", model: "现代伊兰特", type: "经济型", pricePerDay: 130, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR124", company: "悟空租车", model: "荣威i5", type: "经济型", pricePerDay: 122, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR125", company: "联动云", model: "别克威朗", type: "舒适型", pricePerDay: 225, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR126", company: "神州租车", model: "本田雅阁", type: "舒适型", pricePerDay: 238, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR127", company: "一嗨租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 272, seats: 5, features: ["GPS导航", "四驱", "倒车影像", "自动空调"], available: true },
  { id: "CAR128", company: "首汽租车", model: "大众帕萨特", type: "商务型", pricePerDay: 335, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR129", company: "悟空租车", model: "别克GL8", type: "商务型", pricePerDay: 430, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR130", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 598, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热"], available: true },
  { id: "CAR131", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 715, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },

  // ========== 大连 (CAR132-CAR141) ==========
  { id: "CAR132", company: "一嗨租车", model: "日产轩逸", type: "经济型", pricePerDay: 135, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR133", company: "首汽租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 148, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR134", company: "悟空租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 125, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR135", company: "联动云", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 240, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR136", company: "神州租车", model: "大众迈腾", type: "舒适型", pricePerDay: 252, seats: 5, features: ["GPS导航", "蓝牙", "真皮座椅", "自动空调"], available: true },
  { id: "CAR137", company: "一嗨租车", model: "本田CR-V", type: "舒适型", pricePerDay: 265, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR138", company: "首汽租车", model: "奥迪A4L", type: "商务型", pricePerDay: 388, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR139", company: "悟空租车", model: "丰田埃尔法", type: "商务型", pricePerDay: 495, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "后排娱乐", "自动空调"], available: true },
  { id: "CAR140", company: "联动云", model: "宝马5系", type: "豪华型", pricePerDay: 665, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },
  { id: "CAR141", company: "神州租车", model: "保时捷Cayenne", type: "豪华型", pricePerDay: 890, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "BOSE音响", "空气悬架"], available: true },

  // ========== 厦门 (CAR142-CAR151) ==========
  { id: "CAR142", company: "一嗨租车", model: "吉利帝豪", type: "经济型", pricePerDay: 122, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR143", company: "首汽租车", model: "大众朗逸", type: "经济型", pricePerDay: 142, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR144", company: "悟空租车", model: "长安逸动", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR145", company: "联动云", model: "本田雅阁", type: "舒适型", pricePerDay: 238, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR146", company: "神州租车", model: "特斯拉Model 3", type: "舒适型", pricePerDay: 300, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "自动空调"], available: true },
  { id: "CAR147", company: "一嗨租车", model: "丰田RAV4", type: "舒适型", pricePerDay: 268, seats: 5, features: ["GPS导航", "四驱", "倒车影像", "自动空调"], available: true },
  { id: "CAR148", company: "首汽租车", model: "沃尔沃S60", type: "商务型", pricePerDay: 372, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "自动空调"], available: true },
  { id: "CAR149", company: "悟空租车", model: "别克GL8", type: "商务型", pricePerDay: 432, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR150", company: "联动云", model: "奥迪A6L", type: "豪华型", pricePerDay: 608, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "B&O音响"], available: true },
  { id: "CAR151", company: "神州租车", model: "奔驰E300", type: "豪华型", pricePerDay: 725, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },

  // ========== 昆明 (CAR152-CAR161) ==========
  { id: "CAR152", company: "一嗨租车", model: "丰田卡罗拉", type: "经济型", pricePerDay: 148, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像"], available: true },
  { id: "CAR153", company: "首汽租车", model: "日产轩逸", type: "经济型", pricePerDay: 138, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR154", company: "悟空租车", model: "比亚迪秦Plus", type: "经济型", pricePerDay: 128, seats: 5, features: ["GPS导航", "蓝牙", "新能源"], available: true },
  { id: "CAR155", company: "联动云", model: "荣威i5", type: "经济型", pricePerDay: 120, seats: 5, features: ["GPS导航", "蓝牙"], available: true },
  { id: "CAR156", company: "神州租车", model: "丰田凯美瑞", type: "舒适型", pricePerDay: 238, seats: 5, features: ["GPS导航", "蓝牙", "倒车影像", "自动空调"], available: true },
  { id: "CAR157", company: "一嗨租车", model: "比亚迪汉", type: "舒适型", pricePerDay: 278, seats: 5, features: ["GPS导航", "新能源", "自动空调", "座椅加热"], available: true },
  { id: "CAR158", company: "首汽租车", model: "大众帕萨特", type: "商务型", pricePerDay: 335, seats: 5, features: ["GPS导航", "真皮座椅", "倒车影像", "自动空调"], available: true },
  { id: "CAR159", company: "悟空租车", model: "奔驰V260", type: "商务型", pricePerDay: 468, seats: 7, features: ["GPS导航", "真皮座椅", "电动侧滑门", "自动空调"], available: true },
  { id: "CAR160", company: "联动云", model: "宝马5系", type: "豪华型", pricePerDay: 660, seats: 5, features: ["GPS导航", "真皮座椅", "全景天窗", "座椅加热", "座椅通风"], available: true },
  { id: "CAR161", company: "神州租车", model: "特斯拉Model S", type: "豪华型", pricePerDay: 810, seats: 5, features: ["GPS导航", "自动驾驶辅助", "新能源", "全景天窗", "座椅加热"], available: true },
];

// 城市与可用车辆的映射
const cityCarMap: Record<string, string[]> = {
  "上海": ["CAR001", "CAR002", "CAR003", "CAR004", "CAR005", "CAR017", "CAR018", "CAR019", "CAR020", "CAR021", "CAR022"],
  "北京": ["CAR006", "CAR007", "CAR008", "CAR023", "CAR024", "CAR025", "CAR026", "CAR027", "CAR028", "CAR029", "CAR030"],
  "广州": ["CAR009", "CAR010", "CAR031", "CAR032", "CAR033", "CAR034", "CAR035", "CAR036", "CAR037", "CAR038", "CAR039"],
  "深圳": ["CAR011", "CAR012", "CAR040", "CAR041", "CAR042", "CAR043", "CAR044", "CAR045", "CAR046", "CAR047", "CAR048"],
  "成都": ["CAR013", "CAR014", "CAR049", "CAR050", "CAR051", "CAR052", "CAR053", "CAR054", "CAR055", "CAR056", "CAR057"],
  "杭州": ["CAR015", "CAR016", "CAR058", "CAR059", "CAR060", "CAR061", "CAR062", "CAR063", "CAR064", "CAR065", "CAR066"],
  "武汉": ["CAR067", "CAR068", "CAR069", "CAR070", "CAR071", "CAR072", "CAR073", "CAR074", "CAR075", "CAR076", "CAR077"],
  "西安": ["CAR078", "CAR079", "CAR080", "CAR081", "CAR082", "CAR083", "CAR084", "CAR085", "CAR086", "CAR087", "CAR088"],
  "重庆": ["CAR089", "CAR090", "CAR091", "CAR092", "CAR093", "CAR094", "CAR095", "CAR096", "CAR097", "CAR098", "CAR099"],
  "南京": ["CAR100", "CAR101", "CAR102", "CAR103", "CAR104", "CAR105", "CAR106", "CAR107", "CAR108", "CAR109", "CAR110"],
  "长沙": ["CAR111", "CAR112", "CAR113", "CAR114", "CAR115", "CAR116", "CAR117", "CAR118", "CAR119", "CAR120", "CAR121"],
  "青岛": ["CAR122", "CAR123", "CAR124", "CAR125", "CAR126", "CAR127", "CAR128", "CAR129", "CAR130", "CAR131"],
  "大连": ["CAR132", "CAR133", "CAR134", "CAR135", "CAR136", "CAR137", "CAR138", "CAR139", "CAR140", "CAR141"],
  "厦门": ["CAR142", "CAR143", "CAR144", "CAR145", "CAR146", "CAR147", "CAR148", "CAR149", "CAR150", "CAR151"],
  "昆明": ["CAR152", "CAR153", "CAR154", "CAR155", "CAR156", "CAR157", "CAR158", "CAR159", "CAR160", "CAR161"],
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

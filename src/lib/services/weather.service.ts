interface DayWeather {
  date: string;
  weather: string;
  tempHigh: number;
  tempLow: number;
  wind: string;
  tip: string;
}

const weatherPatterns: Record<string, { spring: string[]; summer: string[]; autumn: string[]; winter: string[] }> = {
  "北京": { spring: ["晴", "多云", "扬沙", "晴转多云"], summer: ["晴", "多云", "雷阵雨", "阵雨"], autumn: ["晴", "多云", "晴转多云", "阴"], winter: ["晴", "多云", "阴", "小雪"] },
  "上海": { spring: ["多云", "小雨", "阴", "晴转多云"], summer: ["多云", "雷阵雨", "晴", "阵雨"], autumn: ["晴", "多云", "小雨", "晴转多云"], winter: ["阴", "多云", "小雨", "晴"] },
  "广州": { spring: ["小雨", "多云", "阴", "中雨"], summer: ["雷阵雨", "多云", "晴", "大雨"], autumn: ["晴", "多云", "晴转多云", "阴"], winter: ["晴", "多云", "阴", "小雨"] },
  "深圳": { spring: ["多云", "小雨", "阴", "晴转多云"], summer: ["雷阵雨", "晴", "多云", "阵雨"], autumn: ["晴", "多云", "晴转多云", "阴"], winter: ["晴", "多云", "阴", "多云"] },
  "成都": { spring: ["阴", "多云", "小雨", "阴转多云"], summer: ["多云", "阵雨", "阴", "小雨"], autumn: ["阴", "多云", "小雨", "多云"], winter: ["阴", "多云", "小雨", "阴"] },
  "杭州": { spring: ["多云", "小雨", "阴", "晴转多云"], summer: ["晴", "雷阵雨", "多云", "阵雨"], autumn: ["晴", "多云", "小雨", "晴转多云"], winter: ["阴", "多云", "小雨", "晴"] },
};

const tempRanges: Record<string, { spring: [number, number]; summer: [number, number]; autumn: [number, number]; winter: [number, number] }> = {
  "北京": { spring: [8, 22], summer: [22, 35], autumn: [8, 24], winter: [-8, 5] },
  "上海": { spring: [10, 22], summer: [25, 36], autumn: [12, 26], winter: [2, 10] },
  "广州": { spring: [16, 26], summer: [26, 35], autumn: [18, 30], winter: [10, 20] },
  "深圳": { spring: [18, 27], summer: [26, 34], autumn: [20, 30], winter: [12, 22] },
  "成都": { spring: [12, 22], summer: [22, 32], autumn: [14, 24], winter: [4, 12] },
  "杭州": { spring: [10, 23], summer: [24, 36], autumn: [12, 26], winter: [2, 10] },
};

const tips: Record<string, string> = {
  "晴": "天气晴好，注意防晒",
  "多云": "多云天气，温度适宜",
  "晴转多云": "上午晴朗，午后转多云",
  "阴": "阴天，建议携带薄外套",
  "阴转多云": "上午阴天，午后转多云",
  "小雨": "有小雨，请携带雨伞",
  "中雨": "有中雨，建议携带雨具并注意出行安全",
  "大雨": "有大雨，注意出行安全，建议调整室外行程",
  "阵雨": "有阵雨，建议随身携带雨伞",
  "雷阵雨": "有雷阵雨，注意防雷避雨",
  "扬沙": "有扬沙天气，建议佩戴口罩",
  "小雪": "有小雪，注意保暖防滑",
};

function getSeason(month: number): "spring" | "summer" | "autumn" | "winter" {
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function getWeather(city: string, startDate: string, endDate: string): DayWeather[] | { error: string } {
  const matchedCity = Object.keys(weatherPatterns).find((c) => city.includes(c) || c.includes(city));
  if (!matchedCity) {
    return { error: `暂不支持查询"${city}"的天气，支持的城市：${Object.keys(weatherPatterns).join("、")}` };
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const days: DayWeather[] = [];

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const month = d.getMonth() + 1;
    const season = getSeason(month);
    const patterns = weatherPatterns[matchedCity][season];
    const [tempLowBase, tempHighBase] = tempRanges[matchedCity][season];

    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    const rand = seededRandom(seed);
    const weather = patterns[Math.floor(rand * patterns.length)];
    const tempVariation = Math.floor(seededRandom(seed + 1) * 6) - 3;
    const tempHigh = tempHighBase + tempVariation;
    const tempLow = tempLowBase + tempVariation;

    days.push({
      date: dateStr,
      weather,
      tempHigh,
      tempLow,
      wind: `${Math.floor(seededRandom(seed + 2) * 3) + 1}-${Math.floor(seededRandom(seed + 3) * 3) + 3}级`,
      tip: tips[weather] || "注意关注天气变化",
    });
  }

  return days;
}

// 航班类型
export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: number; // 分钟
  price: number; // CNY
  cabinClass: "economy" | "business" | "first";
  seatsAvailable: number;
}

// 酒店类型
export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  starRating: number;
  pricePerNight: number; // CNY
  roomType: string;
  amenities: string[];
  roomsAvailable: number;
}

// 预订结果
export interface BookingResult {
  success: boolean;
  bookingId?: string;
  message: string;
}

// 差旅政策
export interface PolicyLevel {
  maxFlightPrice: number;
  maxHotelPricePerNight: number;
  preferredAirlines: string[];
  allowedCabinClasses: ("economy" | "business" | "first")[];
}

export interface TravelPolicy {
  [level: string]: PolicyLevel;
}

// 聊天消息（前端展示用）
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

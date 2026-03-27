import { Hotel, BookingResult } from "../types";
import { mockHotels } from "../data/hotels";

export function searchHotels(
  city: string,
  checkIn: string,
  checkOut: string
): (Hotel & { checkIn: string; checkOut: string; nights: number; totalPrice: number })[] {
  const nights = Math.max(
    1,
    Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  return mockHotels
    .filter(
      (h) =>
        h.city.toLowerCase().includes(city.toLowerCase()) &&
        h.roomsAvailable > 0
    )
    .map((h) => ({
      ...h,
      checkIn,
      checkOut,
      nights,
      totalPrice: h.pricePerNight * nights,
    }));
}

const bookedHotels = new Map<string, { hotelId: string; guest: string; checkIn: string; checkOut: string }>();

export function bookHotel(
  hotelId: string,
  guestName: string,
  checkIn: string,
  checkOut: string
): BookingResult {
  const hotel = mockHotels.find((h) => h.id === hotelId);
  if (!hotel) {
    return { success: false, message: `酒店 ${hotelId} 不存在` };
  }
  if (hotel.roomsAvailable <= 0) {
    return { success: false, message: `${hotel.name} 已无空房` };
  }

  hotel.roomsAvailable--;
  const bookingId = `BK-HT-${Date.now()}`;
  bookedHotels.set(bookingId, { hotelId, guest: guestName, checkIn, checkOut });

  return {
    success: true,
    bookingId,
    message: `成功预订 ${hotel.name}（${hotel.city}），房型：${hotel.roomType}，入住：${checkIn}，退房：${checkOut}，客人：${guestName}，预订号：${bookingId}`,
  };
}

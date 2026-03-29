import { Flight, BookingResult } from "../types";
import { mockFlights } from "../data/flights";

function matchCity(flightCity: string, query: string): boolean {
  const q = query.toLowerCase();
  return (
    flightCity.toLowerCase().includes(q) ||
    q.includes(flightCity.toLowerCase())
  );
}

export function searchFlights(
  origin: string,
  destination: string,
  date: string
): (Flight & { date: string })[] {
  const results = mockFlights
    .filter(
      (f) =>
        matchCity(f.origin, origin) &&
        matchCity(f.destination, destination) &&
        f.seatsAvailable > 0
    )
    .map((f) => ({ ...f, date }));

  return results;
}

const bookedFlights = new Map<string, { flightId: string; passenger: string; date: string }>();

export function bookFlight(
  flightId: string,
  passengerName: string
): BookingResult {
  const flight = mockFlights.find(
    (f) => f.id === flightId || f.flightNumber === flightId
  );
  if (!flight) {
    return { success: false, message: `航班 ${flightId} 不存在` };
  }
  if (flight.seatsAvailable <= 0) {
    return { success: false, message: `航班 ${flight.flightNumber} 已无余票` };
  }

  flight.seatsAvailable--;
  const bookingId = `BK-FL-${Date.now()}`;
  bookedFlights.set(bookingId, { flightId, passenger: passengerName, date: new Date().toISOString() });

  return {
    success: true,
    bookingId,
    message: `成功预订航班 ${flight.airline} ${flight.flightNumber}（${flight.origin}→${flight.destination}），乘客：${passengerName}，预订号：${bookingId}`,
  };
}

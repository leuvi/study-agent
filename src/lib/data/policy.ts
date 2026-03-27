import { TravelPolicy } from "../types";

export const travelPolicy: TravelPolicy = {
  junior: {
    maxFlightPrice: 1500,
    maxHotelPricePerNight: 400,
    preferredAirlines: ["中国国航", "东方航空", "南方航空"],
    allowedCabinClasses: ["economy"],
  },
  senior: {
    maxFlightPrice: 2500,
    maxHotelPricePerNight: 600,
    preferredAirlines: ["中国国航", "东方航空", "南方航空"],
    allowedCabinClasses: ["economy"],
  },
  manager: {
    maxFlightPrice: 3500,
    maxHotelPricePerNight: 800,
    preferredAirlines: ["中国国航", "东方航空", "南方航空"],
    allowedCabinClasses: ["economy", "business"],
  },
  director: {
    maxFlightPrice: 6000,
    maxHotelPricePerNight: 1500,
    preferredAirlines: ["中国国航", "东方航空"],
    allowedCabinClasses: ["economy", "business", "first"],
  },
};

import type { Reservation } from "../types/reservation";

// Temporary mock data – will be replaced by API calls later
const mockReservations: Reservation[] = [
  {
    id: "1",
    name: "Max Mustermann",
    email: "max@example.com",
    date: "2026-08-20",
    time: "19:00",
    guests: 4,
    occasion: "Birthday",
  },
  {
    id: "2",
    name: "Maja Mustermann",
    email: "anna@example.com",
    date: "2026-08-21",
    time: "18:30",
    guests: 2,
    occasion: "Anniversary",
  },
];

export default mockReservations;

import type { Reservation, Occasion } from "../types/reservation";

// Prefer env variable in production; fall back to local API during development
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Backend returns MongoDB's _id – need to map it to id for use in frontend
interface ApiReservation {
  _id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: Occasion;
}

function mapReservation(item: ApiReservation): Reservation {
  return {
    id: item._id,
    name: item.name,
    email: item.email,
    date: item.date,
    time: item.time,
    guests: item.guests,
    occasion: item.occasion,
  };
}

export async function getReservations(): Promise<Reservation[]> {
  const res = await fetch(`${API_BASE}/reservations`);

  if (!res.ok) {
    throw new Error("Failed to fetch reservations");
  }

  const data: ApiReservation[] = await res.json();
  return data.map(mapReservation);
}

export async function createReservation(
  payload: Omit<Reservation, "id">,
): Promise<Reservation> {
  const res = await fetch(`${API_BASE}/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to create reservation");
  }

  const data: ApiReservation = await res.json();
  return mapReservation(data);
}

export async function deleteReservation(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/reservations/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete reservation");
  }
}

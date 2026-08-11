import type { Reservation } from "../types/reservation";

// API layer placeholder -> currently everything managed in local state -> later functions call  Express backend

export async function getReservations(): Promise<Reservation[]> {
  // TODO: replace with fetch('/api/reservations')
  throw new Error("API not implemented yet");
}

export async function createReservation(
  data: Omit<Reservation, "id">,
): Promise<Reservation> {
  // TODO: replace with fetch('/api/reservations', { method: 'POST', ... })
  throw new Error("API not implemented yet");
}

export async function deleteReservation(id: string): Promise<void> {
  // TODO: replace with fetch(`/api/reservations/${id}`, { method: 'DELETE' })
  throw new Error("API not implemented yet");
}

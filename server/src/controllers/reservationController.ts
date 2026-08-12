import type { Request, Response } from "express";
import Reservation from "../models/Reservation.js";

// GET /api/reservations
export async function getReservations(
  _req: Request,
  res: Response,
): Promise<void> {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.json(reservations);
  } catch {
    res.status(500).json({ message: "Failed to fetch reservations" });
  }
}

// POST /api/reservations
export async function createReservation(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch {
    res.status(400).json({ message: "Failed to create reservation" });
  }
}

// DELETE /api/reservations/:id
export async function deleteReservation(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { id } = req.params;
    const deleted = await Reservation.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "Reservation not found" });
      return;
    }

    res.json({ message: "Reservation deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete reservation" });
  }
}

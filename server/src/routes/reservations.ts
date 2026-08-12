import { Router } from "express";
import {
  getReservations,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = Router();

router.get("/", getReservations);
router.post("/", createReservation);
router.delete("/:id", deleteReservation);

export default router;

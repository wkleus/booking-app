import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservations.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/reservations", reservationRoutes);

export default app;

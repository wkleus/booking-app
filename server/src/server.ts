import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bookingdb";

async function start(): Promise<void> {
  await connectDB(MONGODB_URI);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();

/* LOCAL TESTS - in VSC Terminal */
//
// $ curl http://localhost:3000/api/health
// {"status":"ok"}

// $ curl -X POST http://localhost:3000/api/reservations \
//   -H "Content-Type: application/json" \
//   -d '{"name":"Test","email":"test@example.com","date":"2026-08-20","time":"19:00","guests":2,"occasion":"Other"}'
// {"name":"Test","email":"test@example.com","date":"2026-08-20","time":"19:00","guests":2,"occasion":"Other","_id":"6a7c730fecd7aa1d35cfcaf8","createdAt":"2026-08-12T13:20:15.617Z","updatedAt":"2026-08-12T13:20:15.617Z","__v":0}

// $ curl http://localhost:3000/api/reservations
// [{"_id":"6a7c730fecd7aa1d35cfcaf8","name":"Test","email":"test@example.com","date":"2026-08-20","time":"19:00","guests":2,"occasion":"Other","createdAt":"2026-08-12T13:20:15.617Z","updatedAt":"2026-08-12T13:20:15.617Z","__v":0},{"_id":"6a7c6fc749e3c76c5dfcb1fa","name":"Test","email":"test@example.com","date":"2026-08-20","time":"19:00","guests":2,"occasion":"Other","createdAt":"2026-08-12T13:06:15.517Z","updatedAt":"2026-08-12T13:06:15.517Z","__v":0}]

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

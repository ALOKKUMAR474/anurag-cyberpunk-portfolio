import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

async function bootstrap() {
  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB connected");
    } else {
      console.warn("MONGODB_URI missing. Starting server without database connection.");
    }

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Bootstrap failed", error);
    process.exit(1);
  }
}

bootstrap();

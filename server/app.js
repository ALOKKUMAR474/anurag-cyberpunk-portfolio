import cors from "cors";
import express from "express";
import { contactRouter } from "./routes/contactRoutes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/api/health", (_request, response) => {
  response.status(200).json({
    status: "ok",
    message: "Cyberpunk portfolio API is live"
  });
});

app.use("/api/contacts", contactRouter);

app.use(notFound);
app.use(errorHandler);

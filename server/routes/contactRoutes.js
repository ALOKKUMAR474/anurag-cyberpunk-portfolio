import { Router } from "express";
import { createContact } from "../controllers/contactController.js";

export const contactRouter = Router();

contactRouter.post("/", createContact);

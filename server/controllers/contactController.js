import { Contact } from "../models/Contact.js";

export async function createContact(request, response, next) {
  try {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      response.status(400);
      throw new Error("Name, email, and message are required");
    }

    const contact = await Contact.create({
      name,
      email,
      message
    });

    response.status(201).json({
      success: true,
      id: contact._id
    });
  } catch (error) {
    next(error);
  }
}

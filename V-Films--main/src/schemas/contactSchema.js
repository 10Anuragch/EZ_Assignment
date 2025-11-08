import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email"),
  phone: z
    .string({ required_error: "Phone is required" })
    .regex(/^[0-9+\-()\s]{7,20}$/i, "Please enter a valid phone number"),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, "Message must be at least 10 characters"),
});

export default contactSchema;

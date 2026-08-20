import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name must not exceed 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .max(100),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid 10-digit mobile number." })
    .max(15, { message: "Phone number is too long." })
    .regex(/^[0-9+\s()-]+$/, { message: "Invalid phone number format." }),
  companyName: z.string().max(100).optional().or(z.literal("")),
  serviceRequired: z.string().min(1, { message: "Please select a service." }),
  budgetRange: z.string().optional().or(z.literal("")),
  preferredContact: z.enum(["whatsapp", "phone", "email"]).optional().default("whatsapp"),
  message: z
    .string()
    .min(10, { message: "Please share a brief description of your project (min 10 characters)." })
    .max(2000, { message: "Message is too long (max 2000 characters)." }),
  honeypot: z.string().max(0, { message: "Spam detected." }).optional().or(z.literal("")),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

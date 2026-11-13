import { z } from "zod";

/** Enquiry payload shared by the browser form and the server handler. */
export const leadSchema = z.object({
  fullName: z.string().trim().min(2, "Name is too short").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number is too short")
    .max(25)
    .refine((value) => value.replace(/\D/g, "").length >= 8, "Phone number is too short"),
  courseSlug: z.string().trim().max(120).default("general"),
  learningObjective: z.string().trim().max(160).default(""),
  preferredFormat: z.string().trim().max(160).default(""),
  message: z.string().trim().max(2000).default(""),
  sourceContext: z.string().trim().max(200).default("website"),
  submittedAt: z.string().max(40).optional(),
  pageUrl: z.string().max(500).optional(),
  referrer: z.string().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

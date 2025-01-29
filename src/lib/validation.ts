// Validation schemas.  Based on prisma structures

import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
});

export type ProfileValues = z.infer<typeof ProfileSchema>;

export const GuestBookSchema = z.object({
  message: z.string().min(1).max(255),
});
export type GuestBookValues = z.infer<typeof GuestBookSchema>;

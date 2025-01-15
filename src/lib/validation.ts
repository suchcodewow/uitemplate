import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const GuestBookSchema = z.object({
  message: z.string().min(1).max(255),
});
export type GuestBookValues = z.infer<typeof GuestBookSchema>;

import { z } from "zod";

export const SignUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

export type SignUserDto = z.infer<typeof SignUserSchema>;

import { z } from "zod";

export const createWifiSchema = z.object({
  title: z.string(),
  network: z.string(),
  password: z.string(),
});

export type createWifiDto = z.infer<typeof createWifiSchema>;

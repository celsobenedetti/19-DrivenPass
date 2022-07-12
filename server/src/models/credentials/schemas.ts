import { z } from "zod";

export const CreateCredentialSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  username: z.string(),
  password: z.string(),
});

export type createCredentialDto = z.infer<typeof CreateCredentialSchema>

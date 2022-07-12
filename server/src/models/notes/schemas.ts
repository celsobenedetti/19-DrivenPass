import { z } from "zod";

export const CreateNoteSchema = z.object({
  title: z.string().max(50),
  content: z.string().max(1000),
});

export type createNoteDto = z.infer<typeof CreateNoteSchema>;

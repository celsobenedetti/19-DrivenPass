import { DocType } from "@prisma/client";
import { z } from "zod";

const DOC_NUMBER = /^[0-9]*$/;

export const createDocSchema = z.object({
  number: z
    .string()
    .regex(DOC_NUMBER, { message: "Doc can only contain numbers" })
    .min(9)
    .max(10),
  type: z.nativeEnum(DocType),
});

export type createDocDto = z.infer<typeof createDocSchema>;

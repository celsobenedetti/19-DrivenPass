import { z } from "zod";
import { CardType } from "@prisma/client";

const CARD_NUMBER = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
const SECURITY_CODE = /[0-9]{3}/;

export const createCardSchema = z.object({
  title: z.string(),
  number: z.string().regex(CARD_NUMBER),
  cardholderName: z.string(),
  securityCode: z.string().regex(SECURITY_CODE),
  expirationDate: z.string(),
  password: z.string(),
  isVirtual: z.boolean(),
  type: z.nativeEnum(CardType),
});

export type createCardDto = z.infer<typeof createCardSchema>;

export const findCardFilter = {
  title: true,
  number: true,
  cardholderName: true,
  password: true,
  securityCode: true,
  expirationDate: true,
  isVirtual: true,
};

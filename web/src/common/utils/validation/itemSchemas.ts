import { z, ZodSchema } from "zod";
import { formatErroMessage, validateSchema } from ".";

const CARD_NUMBER = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
const SECURITY_CODE = /[0-9]{3}/;

enum CardType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

const DOC_NUMBER = /^[0-9]*$/;

enum DocType {
  RG = "RG",
  CNH = "CNH",
}
export const CredentialSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  username: z.string(),
  password: z.string(),
});

export const NoteSchema = z.object({
  title: z.string().max(50),
  content: z.string().max(1000),
});

export const CardSchema = z.object({
  title: z.string(),
  number: z.string().regex(CARD_NUMBER),
  cardholderName: z.string(),
  securityCode: z.string().regex(SECURITY_CODE),
  expirationDate: z.string(),
  password: z.string(),
  type: z.nativeEnum(CardType),
});

export const WifiSchema = z.object({
  title: z.string(),
  network: z.string(),
  password: z.string(),
});

export const DocSchema = z.object({
  number: z
    .string()
    .regex(DOC_NUMBER, { message: "Doc can only contain numbers" })
    .min(9)
    .max(10),
  type: z.nativeEnum(DocType),
});

export type Credential = z.infer<typeof CredentialSchema>;
export type Note = z.infer<typeof NoteSchema>;
export type Card = z.infer<typeof CardSchema>;
export type Wifi = z.infer<typeof WifiSchema>;
export type Document = z.infer<typeof DocSchema>;

export type Item = Credential | Note | Card | Wifi | Document;
export type ItemList = Credential[] | Note[] | Card[] | Wifi[] | Document[];

export const validateForm = (schema: ZodSchema, input: Item) => {
  const errors = validateSchema(schema, input);
  if (errors) return formatErroMessage(errors);
  return "";
};

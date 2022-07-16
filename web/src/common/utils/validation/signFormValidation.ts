import { z } from "zod";
import { validateSchema, formatErroMessage } from "./validateSchema";

const formInputSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({ message: "Invalid email format" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(10, { message: "Password must be at least 10 characters long" }),
});

export type IFormInput = z.infer<typeof formInputSchema>;

export const validateForm = (input: IFormInput) => {
  const errors = validateSchema(formInputSchema, input);
  if (errors) return formatErroMessage(errors);
  return "";
};

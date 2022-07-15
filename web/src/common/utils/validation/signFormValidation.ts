import { z, ZodError } from "zod";

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

export type FormInput = z.infer<typeof formInputSchema>;

export const validateForm = (input: FormInput) => {
  try {
    formInputSchema.parse(input);
  } catch (err: ZodError | unknown) {
    if (err instanceof ZodError) {
      return err.issues
        .map((issue) => issue.message)
        .reduce((message, error) => message + error + "\n", "");
    }
  }
};

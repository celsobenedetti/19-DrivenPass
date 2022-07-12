import jwt from "jsonwebtoken";
import { User } from "../../../models/user";

export const createJwt = (user: User) => {
  const { id, email } = user;
  return jwt.sign({ id, email }, process.env.ENCRYPTION_SECRET + "");
};

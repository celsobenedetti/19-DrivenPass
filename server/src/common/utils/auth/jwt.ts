import jwt from "jsonwebtoken";
import { User } from "../../../models/auth";

const SECRET = process.env.ENCRYPTION_SECRET + "";

export const createJwt = (user: User) => {
  const { id, email } = user;
  return jwt.sign({ id, email }, SECRET);
};

export const decodeJwt = (token: string) => {
  return jwt.verify(token, SECRET);
};

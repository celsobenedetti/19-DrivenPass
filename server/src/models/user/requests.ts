import { Request } from "express";
import { SignUserDto } from "./schemas";

export interface SignUserReq extends Request {
  body: SignUserDto;
}

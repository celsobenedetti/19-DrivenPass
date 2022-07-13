import { Request } from "express";
import { createDocDto } from "./schemas";

export interface createDocReq extends Request {
  body: createDocDto;
}

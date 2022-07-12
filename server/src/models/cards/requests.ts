import { Request } from "express";
import { createCardDto } from "./schemas";

export interface CreateCardReq extends Request {
  body: createCardDto;
}

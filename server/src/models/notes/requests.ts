import { Request } from "express";
import { createNoteDto } from "./schemas";

export interface CreateNoteReq extends Request {
  body: createNoteDto;
}

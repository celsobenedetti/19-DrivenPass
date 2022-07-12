import { Request } from "express";
import { createCredentialDto } from "./schemas";

export interface CreateCredentialReq extends Request {
  body: createCredentialDto;
}

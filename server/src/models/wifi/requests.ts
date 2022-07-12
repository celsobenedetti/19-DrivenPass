import { Request } from "express";
import { createWifiDto } from "./schemas";

export interface CreateWifiReq extends Request {
  body: createWifiDto;
}

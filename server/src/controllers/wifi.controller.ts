import { Request } from "express";
import { SignedUserRes } from "../models/auth";
import { CreateWifiReq } from "../models/wifi";
import wifiService from "../services/wifi.service";

const create = async (req: CreateWifiReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await wifiService.create(+userId, req.body);
  res.sendStatus(201);
};

const findAll = async (_req: Request, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const wifis = await wifiService.findAll(+userId);
  res.status(200).send(wifis);
};

const findOne = async () => {};

const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

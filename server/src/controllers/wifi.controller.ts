import { Request } from "express";
import { ParamsIdReq, SignedUserRes } from "../models/auth";
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

const findOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  const card = await wifiService.findOne(+userId, +credentialId);

  res.status(200).send(card);
};

const deleteOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  await wifiService.deleteOne(+userId, +credentialId);
  res.sendStatus(204);
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

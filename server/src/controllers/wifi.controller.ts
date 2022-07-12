import { Request } from "express";
import { SignedUserRes } from "../models/auth";
import { CreateWifiReq } from "../models/wifi";
import wifiService from "../services/wifi.service";

const create = async (req: CreateWifiReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await wifiService.create(+userId, req.body);
  res.sendStatus(201);
};

const findAll = async (req: Request, res: SignedUserRes) => {};
const findOne = async () => {};
const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

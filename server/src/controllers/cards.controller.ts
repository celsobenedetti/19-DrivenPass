import { Request } from "express";
import { ParamsIdReq, SignedUserRes } from "../models/auth";
import { CreateCardReq } from "../models/cards";
import cardsService from "../services/cards.service";

const create = async (req: CreateCardReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await cardsService.create(+userId, req.body);
  res.sendStatus(201);
};

const findAll = async (_req: Request, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const cards = await cardsService.findAll(+userId);
  res.status(200).send(cards);
};

const findOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  const card = await cardsService.findOne(+userId, +credentialId);

  res.status(200).send(card);
};
const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

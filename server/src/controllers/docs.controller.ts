import { Request } from "express";
import { ParamsIdReq, SignedUserRes } from "../models/auth";
import { createDocReq } from "../models/docs";
import docsService from "../services/docs.service";

const create = async (req: createDocReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await docsService.create(+userId, req.body);
  res.sendStatus(201);
};

const findAll = async (_req: Request, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const docs = await docsService.findAll(+userId);
  res.status(200).send(docs);
};

const findOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  const doc = await docsService.findOne(+userId, +credentialId);
  res.status(200).send(doc);
};

const deleteOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  await docsService.deleteOne(+userId, +credentialId);
  res.sendStatus(204);
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

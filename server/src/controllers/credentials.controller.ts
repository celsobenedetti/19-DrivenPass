import { Request } from "express";
import { ParamsIdReq, SignedUserRes } from "../models/auth";
import { CreateCredentialReq } from "../models/credentials";
import credentialsService from "../services/credentials.service";

const create = async (req: CreateCredentialReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { title, url, username } = await credentialsService.createCredential(
    +userId,
    req.body,
  );
  res.status(201).send({ title, url, username });
};

const findAll = async (_req: Request, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const credentials = await credentialsService.findAll(+userId);
  res.status(200).send(credentials);
};

const findOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: credentialId } = req.params;
  const credential = await credentialsService.findOne(+userId, +credentialId);

  res.status(200).send(credential);
};

export default {
  create,
  findAll,
  findOne,
};

import { Response } from "express";
import { JwtHeaderReq, SignUserReq } from "../models/auth";
import userService from "../services/user.service";

const createAccount = async (req: SignUserReq, res: Response) => {
  const token = await userService.create(req.body);
  res.status(201).send({ token });
};

const signUserIn = async (req: SignUserReq, res: Response) => {
  const token = await userService.validateCredentials(req.body);
  res.status(200).send({ token });
};

const confirmValidJwt = (_req: JwtHeaderReq, res: Response) => res.sendStatus(200);

export default {
  createAccount,
  signUserIn,
  confirmValidJwt,
};

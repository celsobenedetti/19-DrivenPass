import { Response } from "express";
import { SignUserReq } from "../models/user";
import userService from "../services/user.service";

const createAccount = async (req: SignUserReq, res: Response) => {
  const newUser = await userService.create(req.body);
  res.status(201).send(newUser);
};

const signUserIn = async (req: SignUserReq, res: Response) => {
  const token = await userService.validateCredentials(req.body);
  res.status(200).send({ token });
};

export default {
  createAccount,
  signUserIn,
};

import { SignedUserRes } from "../models/auth";
import { CreateCredentialReq } from "../models/credentials";
import credentialsService from "../services/credentials.service";

const createCredential = async (req: CreateCredentialReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { title, url, username } = await credentialsService.createCredential(
    +userId,
    req.body,
  );
  res.status(201).send({ title, url, username });
};

export default {
  createCredential,
};

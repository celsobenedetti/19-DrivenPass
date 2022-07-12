import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { createCredentialDto } from "../models/credentials";

const createCredential = async (userId: number, data: createCredentialDto) => {
  const { title, url, password, username } = data;
  const existingCredential = await prismaService.credential.findUnique({
    where: { title },
  });

  if (existingCredential)
    throw new ConflictException(`A credential with title ${title} already exists`);

  const encryptedPassword = utils.encryptString(password);

  return prismaService.credential.create({
    data: { title, url, username, password: encryptedPassword, user_id: userId },
    select: { title: true, url: true, username: true },
  });
};

const findAll = async (userId: number) => {
  const credentials = await prismaService.credential.findMany({
    select: { title: true, url: true, username: true, password: true },
    where: { user_id: userId },
  });

  return credentials.map((credential) => {
    return {
      ...credential,
      password: utils.decryptString(credential.password),
    };
  });
};

const findOne = async (userId: number, credentialId: number) => {
  const credential = await prismaService.credential.findUnique({
    select: { title: true, url: true, username: true, password: true, user_id: true },
    where: { id: credentialId },
  });

  if (!credential) throw new NotFoundException();
  if (credential.user_id !== userId)
    throw new UnauthorizedException("Credential does not belong to user");

  const { user_id, password, ...credentialData } = credential;
  return {
    ...credentialData,
    password: utils.decryptString(password),
  };
};

const deleteOne = async (userId: number, credentialId: number) => {
  await findOne(userId, credentialId);
  await prismaService.credential.delete({ where: { id: credentialId } });
};

export default {
  createCredential,
  findAll,
  findOne,
  deleteOne,
};

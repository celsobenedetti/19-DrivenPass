import { ConflictException } from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { encryptString } from "../common/utils";
import { createCredentialDto } from "../models/credentials";

const createCredential = async (userId: number, data: createCredentialDto) => {
  const { title, url, password, username } = data;
  const existingCredential = await prismaService.credential.findUnique({
    where: { title },
  });

  if (existingCredential)
    throw new ConflictException(`A credential with title ${title} already exists`);

  const encryptedPassword = encryptString(password);

  return prismaService.credential.create({
    data: { title, url, username, password: encryptedPassword, user_id: userId },
  });
};

export default {
  createCredential,
};

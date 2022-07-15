import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { SignUserDto } from "../models/auth";

const findUserByEmail = async (email: string) => {
  return prismaService.user.findUnique({ where: { email } });
};

const create = async (userData: SignUserDto) => {
  const { email, password } = userData;

  if (await findUserByEmail(email)) {
    throw new ConflictException("Email already registered");
  }

  const hashedPassword = await utils.hashString(password);

  const { id } = await prismaService.user.create({
    data: { email, password: hashedPassword },
  });

  return utils.createJwt(id, email);
};

const validateCredentials = async (userData: SignUserDto) => {
  const { email, password } = userData;

  const user = await findUserByEmail(email);

  if (!user) throw new NotFoundException("Email not registered");
  if (!utils.compareHash(password, user.password))
    throw new UnauthorizedException("Invalid credentials");

  return utils.createJwt(user.id, email);
};

export default {
  findUserByEmail,
  create,
  validateCredentials,
};

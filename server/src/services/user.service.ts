import { ConflictException } from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { hashString } from "../common/utils";
import { SignUserDto } from "../models/user";

const findUserByEmail = async (email: string) => {
  return prismaService.user.findUnique({ where: { email } });
};

const createUser = async (userData: SignUserDto) => {
  const { email, password } = userData;

  if (await findUserByEmail(email)) {
    throw new ConflictException("Email already registered");
  }

  const hashedPassword = await hashString(password);

  return prismaService.user.create({ data: { email, password: hashedPassword } });
};

export default {
  findUserByEmail,
  createUser,
};

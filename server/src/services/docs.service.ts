import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { createDocDto } from "../models/docs";

const create = async (userId: number, data: createDocDto) => {
  const { number, type } = data;
  const existingDoc = await prismaService.docs.findUnique({ where: { number } });

  if (existingDoc) throw new ConflictException("Document already registered");

  return prismaService.docs.create({
    data: { number, type, user_id: userId },
  });
};

const findAll = async (userId: number) => {
  return prismaService.docs.findMany({
    select: { number: true, type: true },
    where: { user_id: userId },
  });
};

const findOne = async (userId: number, docId: number) => {
  const doc = await prismaService.docs.findUnique({
    select: { number: true, type: true, user_id: true },
    where: { id: docId },
  });

  if (!doc) throw new NotFoundException();
  if (doc.user_id !== userId)
    throw new UnauthorizedException("Document does not belong to user");

  const { user_id, ...docData } = doc;
  return docData;
};

const deleteOne = async (userId: number, docId: number) => {
  await findOne(userId, docId);
  await prismaService.docs.delete({ where: { id: docId } });
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

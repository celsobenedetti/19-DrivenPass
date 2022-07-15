import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { createCardDto, findCardFilter } from "../models/cards";

const create = async (userId: number, data: createCardDto) => {
  const existingCard = await prismaService.card.findUnique({
    where: {
      user_id_title: {
        title: data.title,
        user_id: userId,
      },
    },
  });

  if (existingCard)
    throw new ConflictException(`Card already exists with title ${data.title}`);

  const insertData = {
    ...data,
    password: utils.encryptString(data.password),
    securityCode: utils.encryptString(data.securityCode),
    user_id: userId,
  };
  return prismaService.card.create({ data: insertData });
};

const findAll = async (userId: number) => {
  const cards = await prismaService.card.findMany({
    select: findCardFilter,
    where: { user_id: userId },
  });

  return cards.map((card) => {
    return {
      ...card,
      password: utils.decryptString(card.password),
      securityCode: utils.decryptString(card.securityCode),
    };
  });
};

const findOne = async (userId: number, cardId: number) => {
  const card = await prismaService.card.findUnique({
    select: { ...findCardFilter, user_id: true },
    where: { id: cardId },
  });

  if (!card) throw new NotFoundException();
  if (card.user_id !== userId)
    throw new UnauthorizedException("Card does not belong to user");

  const { user_id, password, securityCode, ...cardData } = card;
  return {
    ...cardData,
    password: utils.decryptString(password),
    securityCode: utils.decryptString(securityCode),
  };
};

const deleteOne = async (userId: number, cardId: number) => {
  await findOne(userId, cardId);
  await prismaService.card.delete({ where: { id: cardId } });
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { createCardDto, findCardFilter } from "../models/cards";

const create = async (userId: number, data: createCardDto) => {
  const existingCard = await prismaService.cards.findUnique({
    where: { title: data.title },
  });

  if (existingCard)
    throw new ConflictException(`Card already exists with title ${data.title}`);

  const insertData = {
    ...data,
    password: utils.encryptString(data.password),
    securityCode: utils.encryptString(data.securityCode),
    user_id: userId,
  };
  return prismaService.cards.create({ data: insertData });
};

const findAll = async (userId: number) => {
  const cards = await prismaService.cards.findMany({
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
  const card = await prismaService.cards.findUnique({
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
const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

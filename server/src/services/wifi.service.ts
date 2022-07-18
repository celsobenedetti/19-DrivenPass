import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { createWifiDto } from "../models/wifi";

const create = async (userId: number, data: createWifiDto) => {
  const { title, network, password } = data;
  const existingWifi = await prismaService.wifi.findUnique({
    where: {
      user_id_title: {
        title,
        user_id: userId,
      },
    },
  });

  if (existingWifi)
    throw new ConflictException(`Wifi already exists with title ${title}`);

  return prismaService.wifi.create({
    data: { title, network, password: utils.encryptString(password), user_id: userId },
  });
};

const findAll = async (userId: number) => {
  const wifis = await prismaService.wifi.findMany({
    select: { id: true, title: true, network: true, password: true },
    where: { user_id: userId },
  });

  return wifis.map((wifi) => {
    return {
      ...wifi,
      password: utils.decryptString(wifi.password),
    };
  });
};

const findOne = async (userId: number, wifiId: number) => {
  const wifi = await prismaService.wifi.findUnique({
    select: { title: true, network: true, password: true, user_id: true },
    where: { id: wifiId },
  });

  if (!wifi) throw new NotFoundException();
  if (wifi.user_id !== userId)
    throw new UnauthorizedException("Card does not belong to user");

  return {
    ...wifi,
    password: utils.decryptString(wifi.password),
  };
};

const deleteOne = async (userId: number, wifiId: number) => {
  await findOne(userId, wifiId);
  await prismaService.wifi.delete({ where: { id: wifiId } });
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

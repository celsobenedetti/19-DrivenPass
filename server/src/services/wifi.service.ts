import { ConflictException } from "../common/exceptions";
import { prismaService } from "../common/prisma";
import * as utils from "../common/utils";
import { createWifiDto } from "../models/wifi";

const create = async (userId: number, data: createWifiDto) => {
  const { title, network, password } = data;
  const existingWifi = await prismaService.wifi.findUnique({ where: { title } });

  if (existingWifi)
    throw new ConflictException(`Wifi already exists with title ${title}`);

  return prismaService.wifi.create({
    data: { title, network, password: utils.encryptString(password), user_id: userId },
  });
};

const findAll = async (userId: number) => {
  const wifis = await prismaService.wifi.findMany({
    select: { title: true, network: true, password: true },
    where: { user_id: userId },
  });

  return wifis.map((wifi) => {
    return {
      ...wifi,
      password: utils.decryptString(wifi.password),
    };
  });
};

const findOne = async () => {};
const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

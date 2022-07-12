import { ConflictException } from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { createWifiDto } from "../models/wifi";

const create = async (userId: number, data: createWifiDto) => {
  const { title, network, password } = data;
  const existingWifi = await prismaService.wifi.findUnique({ where: { title } });

  if (existingWifi)
    throw new ConflictException(`Wifi already exists with title ${title}`);

  return prismaService.wifi.create({
    data: { title, network, password, user_id: userId },
  });
};

const findAll = async () => {};
const findOne = async () => {};
const deleteOne = async () => {};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

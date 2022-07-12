import { ConflictException } from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { createNoteDto } from "../models/notes";

const create = async (userId: number, data: createNoteDto) => {
  const { title, content } = data;
  const existingNote = await prismaService.notes.findUnique({ where: { title } });

  if (existingNote)
    throw new ConflictException(`Note already exists with title ${title}`);

  return prismaService.notes.create({
    data: { title, content, user_id: userId },
    select: { title: true, content: true },
  });
};

export default {
  create,
};

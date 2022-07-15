import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { createNoteDto } from "../models/notes";

const create = async (userId: number, data: createNoteDto) => {
  const { title, content } = data;
  const existingNote = await prismaService.note.findUnique({
    where: {
      user_id_title: {
        title,
        user_id: userId,
      },
    },
  });

  if (existingNote)
    throw new ConflictException(`Note already exists with title ${title}`);

  return prismaService.note.create({
    data: { title, content, user_id: userId },
  });
};

const findAll = async (userId: number) => {
  return prismaService.note.findMany({
    select: { title: true, content: true },
    where: { user_id: userId },
  });
};

const findOne = async (userId: number, noteId: number) => {
  const note = await prismaService.note.findUnique({
    select: { title: true, content: true, user_id: true },
    where: { id: noteId },
  });

  if (!note) throw new NotFoundException();
  if (note.user_id !== userId)
    throw new UnauthorizedException("Note does not belong to user");

  return note;
};

const deleteOne = async (userId: number, noteId: number) => {
  await findOne(userId, noteId);
  await prismaService.note.delete({ where: { id: noteId } });
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

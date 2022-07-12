import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from "../common/exceptions";
import { prismaService } from "../common/prisma";
import { createNoteDto } from "../models/notes";

const create = async (userId: number, data: createNoteDto) => {
  const { title, content } = data;
  const existingNote = await prismaService.notes.findUnique({ where: { title } });

  if (existingNote)
    throw new ConflictException(`Note already exists with title ${title}`);

  return prismaService.notes.create({
    data: { title, content, user_id: userId },
  });
};

const findAll = async (userId: number) => {
  return prismaService.notes.findMany({
    select: { title: true, content: true },
    where: { user_id: userId },
  });
};

const findOne = async (userId: number, noteId: number) => {
  const note = await prismaService.notes.findUnique({
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
  await prismaService.notes.delete({ where: { id: noteId } });
};

export default {
  create,
  findAll,
  findOne,
  deleteOne,
};

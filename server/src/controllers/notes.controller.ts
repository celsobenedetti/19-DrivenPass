import { Request } from "express";
import { ParamsIdReq, SignedUserRes } from "../models/auth";
import { CreateNoteReq } from "../models/notes";
import notesService from "../services/notes.service";

const create = async (req: CreateNoteReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await notesService.create(+userId, req.body);
  res.sendStatus(201);
};

const findAll = async (_req: Request, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const notes = await notesService.findAll(+userId);
  res.status(200).send(notes);
};

const findOne = async (req: ParamsIdReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const { id: noteId } = req.params;
  const note = await notesService.findOne(+userId, +noteId);

  res.status(200).send(note);
};

export default {
  create,
  findAll,
  findOne,
};

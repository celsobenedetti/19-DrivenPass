import { SignedUserRes } from "../models/auth";
import { CreateNoteReq } from "../models/notes";
import notesService from "../services/notes.service";

const create = async (req: CreateNoteReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  const newNote = await notesService.create(+userId, req.body);
  res.status(201).send(newNote);
};

export default {
  create,
};

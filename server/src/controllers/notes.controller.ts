import { SignedUserRes } from "../models/auth";
import { CreateNoteReq } from "../models/notes";
import notesService from "../services/notes.service";

const create = async (req: CreateNoteReq, res: SignedUserRes) => {
  const { id: userId } = res.locals.user;
  await notesService.create(+userId, req.body);
  res.sendStatus(201);
};

export default {
  create,
};

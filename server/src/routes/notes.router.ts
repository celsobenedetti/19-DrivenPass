import { Router } from "express";
import notesController from "../controllers/notes.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { CreateNoteSchema } from "../models/notes";

const router = Router();

router.use(verifyJwtHeader);

router.post("/notes", validateBody(CreateNoteSchema), notesController.create);
router.get("/notes", notesController.findAll);
router.get("/notes/:id", notesController.findOne);
router.delete("/notes/:id", notesController.deleteOne);

export default router;

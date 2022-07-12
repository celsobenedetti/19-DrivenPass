import { Router } from "express";
import notesController from "../controllers/notes.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { CreateNoteSchema } from "../models/notes";

const router = Router();

router.use(verifyJwtHeader);

router.post("/notes", validateBody(CreateNoteSchema), notesController.create);
router.get("/notes");
router.get("/notes/:id");
router.delete("/notes/:id");

export default router;

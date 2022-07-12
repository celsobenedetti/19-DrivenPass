import { Router } from "express";
import validateBody from "../middleware/validation/zod";

const router = Router();

router.post("/notes", validateBody);
router.get("/notes");
router.get("/notes/:id");
router.delete("/notes/:id");

export default router;

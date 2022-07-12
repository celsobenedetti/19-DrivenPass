import { Router } from "express";
import cardsController from "../controllers/cards.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { createCardSchema } from "../models/cards";

const router = Router();

router.use(verifyJwtHeader);

router.post("/cards", validateBody(createCardSchema), cardsController.create);
router.get("/cards", cardsController.findAll);
router.get("/cards/:id", cardsController.findOne);
router.delete("/cards/:id");

export default router;

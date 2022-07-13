import { Router } from "express";
import docsController from "../controllers/docs.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { createDocSchema } from "../models/docs";

const router = Router();

router.use(verifyJwtHeader);

router.post("/docs", validateBody(createDocSchema), docsController.create);
router.get("/docs", docsController.findAll);
router.get("/docs/:id", docsController.findOne);
router.delete("/docs/:id", docsController.deleteOne);

export default router;

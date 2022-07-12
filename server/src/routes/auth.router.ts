import { Router } from "express";
import authController from "../controllers/auth.controller";
import validateBody from "../middleware/validation/zod";
import { SignUserSchema } from "../models/user";

const router = Router();

router.post("/signup", validateBody(SignUserSchema), authController.createAccount);
router.post("/signin", validateBody(SignUserSchema), authController.signUserIn);

export default router;

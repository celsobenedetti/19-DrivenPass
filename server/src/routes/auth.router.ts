import { Router } from "express";
import authController from "../controllers/auth.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { SignUserSchema } from "../models/auth";

const router = Router();

router.post("/signup", validateBody(SignUserSchema), authController.createAccount);
router.post("/signin", validateBody(SignUserSchema), authController.signUserIn);
router.post("/auth/check", verifyJwtHeader, authController.confirmValidJwt);

export default router;

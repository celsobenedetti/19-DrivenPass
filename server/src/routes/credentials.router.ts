import { Router } from "express";
import credentialsController from "../controllers/credentials.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { CreateCredentialSchema } from "../models/credentials";

const router = Router();

router.post(
  "/credentials",
  verifyJwtHeader,
  validateBody(CreateCredentialSchema),
  credentialsController.createCredential,
);

export default router;

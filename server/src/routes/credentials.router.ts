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
  credentialsController.create,
);

router.get("/credentials", verifyJwtHeader, credentialsController.findAll);
router.get("/credentials/:id", verifyJwtHeader, credentialsController.findOne);
router.delete("/credentials/:id", verifyJwtHeader, credentialsController.deleteOne);

export default router;

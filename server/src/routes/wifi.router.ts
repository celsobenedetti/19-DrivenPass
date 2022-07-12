import { Router } from "express";
import wifiController from "../controllers/wifi.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { createWifiSchema } from "../models/wifi";

const router = Router();

router.use(verifyJwtHeader);

router.post("/wifi", validateBody(createWifiSchema), wifiController.create);
router.get("/wifi");
router.get("/wifi/:id");
router.delete("/wifi/:id");

export default router;

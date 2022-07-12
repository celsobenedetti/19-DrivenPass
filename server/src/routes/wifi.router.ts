import { Router } from "express";
import wifiController from "../controllers/wifi.controller";
import verifyJwtHeader from "../middleware/auth/jwt-header";
import validateBody from "../middleware/validation/zod";
import { createWifiSchema } from "../models/wifi";

const router = Router();

router.use(verifyJwtHeader);

router.post("/wifi", validateBody(createWifiSchema), wifiController.create);
router.get("/wifi", wifiController.findAll);
router.get("/wifi/:id", wifiController.findOne);
router.delete("/wifi/:id", wifiController.deleteOne);

export default router;

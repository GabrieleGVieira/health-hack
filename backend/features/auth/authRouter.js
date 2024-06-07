import { Router } from "express";
const router = Router();
import loginController from "./authController.js";

router.post("/", loginController);

export default router;

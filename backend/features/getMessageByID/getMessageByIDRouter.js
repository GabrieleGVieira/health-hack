import { Router } from "express";
const router = Router();
import getMessageByIDController from "./getMessageByIDController.js";

router.get("/", getMessageByIDController);

export default router;

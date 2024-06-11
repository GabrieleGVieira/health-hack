import { Router } from "express";
const router = Router();
import sendMessageController from "./sendMessageController.js";

router.post("/", sendMessageController);

export default router;

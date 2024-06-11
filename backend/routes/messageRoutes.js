import express from "express";
const router = express.Router();

import sendMessage from "../features/sendMessage/sendMessageRouter.js";
import getMessageByIDController from "../features/getMessageByID/getMessageByIDRouter.js";

router.use("/message", sendMessage);
router.use("/message", getMessageByIDController);

export default router;

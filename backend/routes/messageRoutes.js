import express from "express";
const router = express.Router();

import sendMessage from "../features/sendMessage/sendMessageRouter.js";

router.use("/message", sendMessage);

export default router;

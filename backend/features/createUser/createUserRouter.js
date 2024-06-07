import { Router } from "express";
const router = Router();
import createUserController from "./createUserController.js";

router.post("/", createUserController);

export default router;

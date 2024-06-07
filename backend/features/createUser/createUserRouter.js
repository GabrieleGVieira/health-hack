import { Router } from "express";
const router = Router();
import createUserController from "./createUserController.js";

router.post("/register", createUserController);

export default router;

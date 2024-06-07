import express from "express";
const router = express.Router();

import createUser from "../features/createUser/createUserRouter.js";
import login from "../features/auth/authRouter.js";

router.use("/user", createUser);
router.use("/user", login);

export default router;

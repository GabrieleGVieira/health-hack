import express from "express";
const router = express.Router();


import createUser from "../features/createUser/createUserRouter.js";


router.use("/user", createUser);

export default router;

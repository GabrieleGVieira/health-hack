import express from "express";
const router = express.Router();
import userRoutes from "./userRoutes.js";
import cors from "cors";

router.use(
  cors({
    origin: "http://localhost:3001", // Permitir solicitações do front
  })
);
router.use("/api", userRoutes);

export default router;

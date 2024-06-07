import express, { json } from "express";
import connectDB from "./mongodb/db.js";
import cors from "cors";
const app = express();
import routes from "./routes/index.js";

// Conexão com MongoDB
connectDB();

app.use(cors());
app.use(json());
app.use(routes);

export default app;
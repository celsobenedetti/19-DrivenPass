import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import AppRouter from "./routes";

const app = express();
app.use(cors());

app.use(AppRouter);

export default app;

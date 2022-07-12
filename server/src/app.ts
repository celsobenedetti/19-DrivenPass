import cors from "cors";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import { errorHandler, errorLogger } from "./middleware/error";
import appRouter from "./routes";

const app = express();
app.use(cors());

app.use(appRouter);

app.use(errorLogger);
app.use(errorHandler);

export default app;

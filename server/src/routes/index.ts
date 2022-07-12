import { Request, Response, Router } from "express";
import authRouter from "./auth.router";
import credentialsRouter from "./credentials.router";

const appRouter = Router();

appRouter.get("/", (_r: Request, res: Response) =>
  res.status(200).send("Hello from Driven Pass"),
);

appRouter.use([authRouter, credentialsRouter]);

export default appRouter;

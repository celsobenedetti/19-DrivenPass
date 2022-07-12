import { Request, Response, Router } from "express";
import authRouter from "./auth.router";

const appRouter = Router();

appRouter.get("/", (_req: Request, res: Response) =>
  res.status(200).send("Hello from Driven Pass"),
);

appRouter.use(authRouter);

export default appRouter;

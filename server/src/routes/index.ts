import { Request, Response, Router } from "express";

const AppRouter = Router();

AppRouter.get("/", (_req: Request, res: Response) =>
  res.status(200).send("Hello from Driven Pass")
);

export default AppRouter;

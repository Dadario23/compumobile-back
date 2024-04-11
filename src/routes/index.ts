import express, { Request, Response, Router } from "express";
import usersRouter from "./users";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Api funcionando!" }).status(200);
});

router.use("/users", usersRouter);

export default router;

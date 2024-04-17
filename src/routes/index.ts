import express, { Request, Response, Router } from "express";
import usersRouter from "./users";
import devicesRouter from "./devices";
import brandRouter from "./brands";
import modelRouter from "./models";
import appintmentsRouter from "./appointments";
import schedulesRouter from "./schedules";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Api funcionando!" }).status(200);
});

router.use("/users", usersRouter);
router.use("/devices", devicesRouter);
router.use("/brands", brandRouter);
router.use("/models", modelRouter);
router.use("/appintments", appintmentsRouter);
router.use("/schedules", schedulesRouter);

export default router;

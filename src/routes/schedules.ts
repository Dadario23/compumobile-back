import express from "express";
import scheduleController from "../controllers/scheduleControllers";

const router = express.Router();

router.get("/", scheduleController.getAvailableSchedules);
/* router.get("/:id", scheduleController.getScheduleById); */
router.post("/create", scheduleController.createSchedule);
/* router.put("/:id", scheduleController.updateSchedule);
router.delete("/:id", scheduleController.deleteSchedule); */

export default router;

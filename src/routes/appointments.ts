import express from "express";
import auth from "../middlewares/auth";
import appointmentController from "../controllers/appointmentControllers";

const router = express.Router();

router.get("/", appointmentController.getAllAppointments);
/* router.get("/:id", appointmentController.getAppointmentById); */
router.post("/create", /*  auth, */ appointmentController.createAppointment);
/* router.put("/:id", appointmentController.updateAppointment); */
/* router.delete("/:id", appointmentController.deleteAppointment); */
/* router.get("/user/:userId", appointmentController.getAppointmentsByUser); */

export default router;

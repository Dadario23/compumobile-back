import { Request, Response } from "express";
import Appointment from "../models/Appointment";
import { Schedule } from "../models";

/* interface CustomRequest extends Request {
  user?: {
    id: number;
  };
} */

const appointmentController = {
  createAppointment: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { userId, scheduleId } = req.body;

      const newAppointment = await Appointment.create({
        userId,
        scheduleId,
      });

      // Actualizar el estado del horario reservado a `false`
      await Schedule.update(
        { available: false },
        { where: { id: scheduleId } }
      );

      return res.status(201).json(newAppointment); // Devolver el nuevo turno creado en formato JSON
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          error: "Error interno del servidor.",
          message: error.message,
        });
      } else {
        return res.status(500).json({ error: "Error interno del servidor." });
      }
    }
  },

  getAllAppointments: async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const appointments = await Appointment.findAll(); // Obtener todos los turnos existentes en la base de datos
      return res.status(200).json(appointments); // Devolver los turnos en formato JSON
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor." }); // Manejar cualquier error interno del servidor
    }
  },
};

export default appointmentController;

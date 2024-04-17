import { Request, Response } from "express";
import Appointment from "../models/Appointment";
import { Schedule } from "../models";

interface CustomRequest extends Request {
  user?: {
    id: number;
  };
}

const appointmentController = {
  createAppointment: async (req: CustomRequest, res: Response) => {
    const { name, email, appointmentDate, scheduleId } = req.body;
    const userId = req.user.id; // Suponiendo que tienes el ID del usuario en req.user

    try {
      const newAppointment = await Appointment.create({
        name,
        email,
        appointmentDate,
        scheduleId,
        userId, // Asociar el ID del usuario al turno creado
      });

      // Obtener el horario asociado al scheduleId
      const schedule = await Schedule.findByPk(scheduleId);

      // Verificar si se encontró el horario y actualizar la disponibilidad
      if (schedule) {
        await schedule.update({ available: false });
      } else {
        throw new Error("Horario no encontrado");
      }

      res.status(201).json(newAppointment);
    } catch (error) {
      console.error("Error al crear el turno:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getAllAppointments: async (req: Request, res: Response) => {
    try {
      // Obtener todos los turnos de la base de datos
      const appointments = await Appointment.findAll();

      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getAppointmentById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        res.status(404).json({ message: "Turno no encontrado" });
        return;
      }
      res.status(200).json(appointment);
    } catch (error) {
      console.error("Error al obtener el turno:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
  getAppointmentsByUser: async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
      // Crear un objeto de opciones de búsqueda con la propiedad 'where'
      const options = {
        where: { userId },
      };

      // Utilizar el objeto de opciones de búsqueda al llamar a Appointment.findAll()
      const appointments = await Appointment.findAll(options);
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Error al obtener los turnos del usuario:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  updateAppointment: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, appointmentDate, scheduleId } = req.body;
    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        res.status(404).json({ message: "Turno no encontrado" });
        return;
      }
      await appointment.update({ name, email, appointmentDate, scheduleId });
      res.status(200).json(appointment);
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  deleteAppointment: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        res.status(404).json({ message: "Turno no encontrado" });
        return;
      }
      await appointment.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el turno:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

export default appointmentController;

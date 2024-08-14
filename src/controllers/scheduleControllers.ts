// controllers/scheduleController.ts
import { Request, Response } from "express";
import Schedule from "../models/Schedule";

const scheduleController = {
  getAvailableSchedules: async (req: Request, res: Response) => {
    try {
      const { date } = req.query; // Obtener la fecha de la consulta
      console.log("FECHA SELECCIONADA", date);
      const horariosDisponibles = await Schedule.findAll({
        where: {
          date: date,
          available: true,
        },
      });
      res.status(200).json(horariosDisponibles);
    } catch (error) {
      console.error("Error al obtener horarios disponibles:", error);
      res
        .status(500)
        .json({ message: "Error al obtener horarios disponibles" });
    }
  },

  /* getScheduleById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        res.status(404).json({ message: "Horario no encontrado" });
        return;
      }
      res.status(200).json(schedule);
    } catch (error) {
      console.error("Error al obtener el horario:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }, */

  createSchedule: async (req: Request, res: Response) => {
    try {
      const { date, hours } = req.body; // Suponiendo que el cliente envía la fecha y los horarios disponibles
      // Crear nuevos registros de horarios en la base de datos
      await Schedule.bulkCreate(
        hours.map((hour: string) => ({ hour, available: true, date }))
      );
      res.status(201).json({ message: "Horarios agregados correctamente" });
    } catch (error) {
      console.error("Error al agregar horarios:", error);
      res.status(500).json({ message: "Error al agregar horarios" });
    }
  },

  /* updateSchedule: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { hour, available } = req.body;
    try {
      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        res.status(404).json({ message: "Horario no encontrado" });
        return;
      }
      await schedule.update({ hour, available });
      res.status(200).json(schedule);
    } catch (error) {
      console.error("Error al actualizar el horario:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }, */

  /* deleteSchedule: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        res.status(404).json({ message: "Horario no encontrado" });
        return;
      }
      await schedule.destroy();
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el horario:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }, */
};

export default scheduleController;

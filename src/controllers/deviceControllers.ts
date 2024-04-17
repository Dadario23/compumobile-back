import Device from "../models/Device";
import { Request, Response } from "express";

const brandController = {
  registerDevice: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { marca, modelo, falla } = req.body;
      const newDevice = await Device.create({
        marca,
        modelo,
        falla,
      });
      return res.status(201).send(newDevice);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
};

export default brandController;

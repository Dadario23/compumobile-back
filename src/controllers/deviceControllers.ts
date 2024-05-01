import Device from "../models/Device";
import { Request, Response } from "express";

const brandController = {
  registerDevice: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { brand, model, fail, userId } = req.body;
      const newDevice = await Device.create({
        brand,
        model,
        fail,
        userId,
      });
      return res.status(201).send(newDevice);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
  getAllDevices: async (req: Request, res: Response): Promise<Response> => {
    try {
      const devices = await Device.findAll();
      return res.status(201).send(devices);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
};

export default brandController;

import Device from "../models/Device";
import { Request, Response } from "express";

const deviceController = {
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
  getUserDevices: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { userId } = req.params;
      console.log("USER ID", userId);
      const devices = await Device.findAll({ where: { userId } });
      if (devices.length > 0) {
        return res.status(200).send(devices);
      } else {
        return res
          .status(404)
          .json({ error: "No se encontraron dispositivos para este usuario." });
      }
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor." });
    }
  },
};

export default deviceController;

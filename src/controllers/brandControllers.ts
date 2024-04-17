import { Request, Response } from "express";
import { Brand } from "../models";

const brandController = {
  getAllBrands: async (req: Request, res: Response) => {
    try {
      const brands = await Brand.findAll();
      res.json(brands).status(204);
    } catch (error) {
      console.error("Error al obtener marcas:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

export default brandController;

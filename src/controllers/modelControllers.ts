import { Request, Response } from "express";
import { Brand, Model } from "../models";

export const getModelsByBrand = async (req: Request, res: Response) => {
  const brandName = req.query.brand as string;
  console.log("MARCA SELECCIONADA QUERY", brandName);

  try {
    // Buscamos la marca en la base de datos
    const brand = await Brand.findOne({ where: { name: brandName } });

    if (!brand) {
      return res.status(404).json({ error: "Marca no encontrada" });
    }

    // Buscamos los modelos asociados a la marca
    const models = await Model.findAll({ where: { brandId: brand.id } });

    res.json(models);
  } catch (error) {
    console.error("Error al obtener modelos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getModelsByBrand;

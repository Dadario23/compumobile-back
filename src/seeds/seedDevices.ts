// seed/seedDevices.js

import { Brand, Model } from "../models";
import { brands, models } from "./seed";

const seedDevices = async () => {
  try {
    // Sembrar marcas
    for (const brand of brands) {
      await Brand.create(brand);
    }

    // Iterar sobre el array de modelos
    for (const modelData of models) {
      const brand = await Brand.findOne({ where: { id: modelData.brandId } });
      if (!brand) {
        console.error(`Marca no encontrada para el modelo ${modelData.name}`);
        continue;
      }

      await Model.create({
        name: modelData.name,
        brandId: brand.id,
      });
    }

    console.log("Marcas y modelos sembrados exitosamente");
  } catch (error) {
    console.error("Error al sembrar marcas y modelos:", error);
  }
};

export default seedDevices;

// seed/index.js

import db from "../config/index";
import seedUsers from "./seedUsers";
import seedDevices from "./seedDevices";
import seedDays from "./seedDays";
import seedSchedules from "./seedSchedules";

const seedData = async () => {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos compumobiledb");
    await db.sync({ force: true });

    // Sembrar usuarios
    await seedUsers();

    // Sembrar marcas y modelos
    await seedDevices();

    // Sembrar días
    await seedDays();

    // Sembrar horarios para los días disponibles
    await seedSchedules();

    console.log("Base de datos sembrada exitosamente");
  } catch (error) {
    console.error("Error al sembrar la base de datos:", error);
  }
};

seedData();

/* import db from "../config/index";
import { User, Model, Device, Brand, Schedule, Day } from "../models";
import { users, devices, brands, models } from "./seed";

const seedData = async () => {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos compumobiledb");
    await db.sync({ force: true });

    for (const user of users) {
      await User.create(user);
    }
    for (const device of devices) {
      await Device.create(device);
    }

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

    // Crear los días del 16 de abril al 30 de abril de 2024
    const daysData = [
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
      "Lunes",
      "Martes",
    ];

    // Iterar sobre los días y crearlos en la base de datos
    for (const dayName of daysData) {
      const day = await Day.create({ name: dayName });
      const dayId = day.id; // Guardar el id del día creado

      // Crear horarios para el día actual (de lunes a viernes, de 09:00 a 19:00)
      if (dayName !== "Sábado" && dayName !== "Domingo") {
        for (let hour = 9; hour <= 19; hour++) {
          const hourStr = `${hour < 10 ? "0" : ""}${hour}`;
          await Schedule.create({
            dayId, // Usar el id del día creado
            hour: `${hourStr}:00`,
            available: true,
          });
          await Schedule.create({
            dayId, // Usar el id del día creado
            hour: `${hourStr}:30`,
            available: true,
          });
        }
      }
    }

    console.log("Base de datos de modelos sembrada exitosamente");
  } catch (error) {
    console.error("Error al sembrar la base de datos de modelos:", error);
  }
};

seedData();
 */

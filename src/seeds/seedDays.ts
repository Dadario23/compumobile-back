// seed/seedDays.ts

import { Day } from "../models";

const seedDays = async () => {
  try {
    // Obtener la fecha actual
    const currentDate = new Date();

    // Crear los días del 16 de abril al 30 de abril de 2024
    const daysData = [
      { name: "Martes", date: currentDate },
      {
        name: "Miércoles",
        date: new Date(currentDate.getTime() + 1 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Jueves",
        date: new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Viernes",
        date: new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Sábado",
        date: new Date(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Domingo",
        date: new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Lunes",
        date: new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Martes",
        date: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Miércoles",
        date: new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Jueves",
        date: new Date(currentDate.getTime() + 9 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Viernes",
        date: new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Sábado",
        date: new Date(currentDate.getTime() + 11 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Domingo",
        date: new Date(currentDate.getTime() + 12 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Lunes",
        date: new Date(currentDate.getTime() + 13 * 24 * 60 * 60 * 1000),
      },
      {
        name: "Martes",
        date: new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000),
      },
    ];

    // Iterar sobre los días y crearlos en la base de datos
    for (const dayData of daysData) {
      await Day.create(dayData);
    }

    console.log("Días sembrados exitosamente");
  } catch (error) {
    console.error("Error al sembrar días:", error);
  }
};

export default seedDays;

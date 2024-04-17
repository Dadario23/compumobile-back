import moment from "moment";
import { Schedule } from "../models";

const seedSchedules = async () => {
  try {
    // Generar fechas desde la fecha actual hasta 15 días posteriores
    const startDate = moment(); // Fecha actual
    const endDate = moment().add(15, "days"); // 15 días posteriores

    // Iterar sobre las fechas y crear horarios para cada una
    for (
      let date = startDate.clone();
      date.isBefore(endDate);
      date.add(1, "day")
    ) {
      const dayOfWeek = date.day(); // Obtener el día de la semana (0 para Domingo, 1 para Lunes, etc.)

      // Determinar el rango horario según el día de la semana
      let startTime, endTime;
      if (dayOfWeek === 6) {
        // Sábado
        startTime = "09:00";
        endTime = "14:00";
      } else {
        // Lunes a Viernes
        startTime = "09:00";
        endTime = "19:00";
      }

      // Crear horarios para la fecha actual
      const currentDay = date.format("YYYY-MM-DD");
      let currentTime = moment(startTime, "HH:mm");
      const endTimeMoment = moment(endTime, "HH:mm");
      const schedules = [];

      while (currentTime.isSameOrBefore(endTimeMoment)) {
        // Generar un valor aleatorio para la propiedad "available"
        const available = Math.random() < 0.5; // 50% de probabilidad de ser true o false

        schedules.push({
          date: currentDay,
          hour: currentTime.format("HH:mm"),
          available,
        });

        // Agregar 30 minutos al tiempo actual
        currentTime.add(30, "minutes");
      }

      // Crear los registros de horarios en la base de datos
      await Schedule.bulkCreate(schedules);
    }

    console.log("Horarios sembrados exitosamente");
  } catch (error) {
    console.error("Error al sembrar horarios:", error);
  }
};

export default seedSchedules;

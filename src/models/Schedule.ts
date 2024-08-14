import S from "sequelize";
import db from "../config";

class Schedule extends S.Model {}

Schedule.init(
  {
    date: {
      type: S.DataTypes.DATEONLY, // Tipo de datos para almacenar solo la fecha sin la hora
      allowNull: false,
    },
    startHour: {
      type: S.DataTypes.STRING, // Almacena la hora de inicio
      allowNull: false,
    },
    endHour: {
      type: S.DataTypes.STRING, // Almacena la hora de fin
      allowNull: false,
    },
    available: {
      type: S.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: db,
    modelName: "Schedule",
    tableName: "schedules",
    timestamps: false,
  }
);

export default Schedule;

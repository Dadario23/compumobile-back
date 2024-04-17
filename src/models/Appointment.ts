import S from "sequelize";
import db from "../config";

interface AppointmentAttributes {
  name: string;
  email: string;
  appointmentDate: Date;
  scheduleId: number;
  userId: number;
}

class Appointment
  extends S.Model<AppointmentAttributes>
  implements AppointmentAttributes
{
  public name!: string;
  public email!: string;
  public appointmentDate!: Date;
  public scheduleId!: number;
  public userId!: number;
}

Appointment.init(
  {
    name: {
      type: S.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: S.DataTypes.STRING,
      allowNull: false,
    },
    appointmentDate: {
      type: S.DataTypes.DATE,
      allowNull: false,
    },
    scheduleId: {
      type: S.DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: S.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Appointment",
    tableName: "appointments",
  }
);

export default Appointment;

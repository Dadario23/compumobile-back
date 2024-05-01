import S from "sequelize";
import db from "../config";

interface AppointmentAttributes {
  userId: number;
  scheduleId: number;
}
class Appointment
  extends S.Model<AppointmentAttributes>
  implements AppointmentAttributes
{
  public userId!: number;
  public scheduleId!: number;
}

Appointment.init(
  {
    userId: {
      type: S.DataTypes.INTEGER,
      allowNull: false,
    },
    scheduleId: {
      type: S.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Appointment",
    tableName: "appointments",
    timestamps: false,
  }
);

export default Appointment;

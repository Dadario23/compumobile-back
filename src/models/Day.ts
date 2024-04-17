import S from "sequelize";
import db from "../config";

interface DayAttributes {
  name: string;
  date: Date;
}

class Day extends S.Model<DayAttributes> implements DayAttributes {
  public id!: number;
  public name!: string;
  public date!: Date;
}

Day.init(
  {
    name: {
      type: S.DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: S.DataTypes.DATEONLY, // Solo fecha, sin hora
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Day",
    tableName: "days",
    timestamps: false,
  }
);

export default Day;

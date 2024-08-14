import { DataTypes, Model } from "sequelize";
import db from "../config";

class Device extends Model {
  declare brand: string;
  declare model: string;
  declare fail: string;
  declare userId: number; // Añadimos el campo userId
}

Device.init(
  {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      // Añadimos la definición del campo userId
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "devices",
    timestamps: false,
  }
);

export default Device;

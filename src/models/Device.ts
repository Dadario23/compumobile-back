import { DataTypes, Model } from "sequelize";
import db from "../config";

class Device extends Model {
  declare marca: string;
  declare modelo: string;
  declare falla: string;
}

Device.init(
  {
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    falla: {
      type: DataTypes.STRING,
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

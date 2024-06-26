import S from "sequelize";
import db from "../config";

class Brand extends S.Model {
  declare id: number;
  declare name: string;
}

Brand.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "brands",
    timestamps: false,
  }
);

export default Brand;

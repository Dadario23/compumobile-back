import S from "sequelize";
import db from "../config";

class Model extends S.Model {
  declare name: string;
}

Model.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "models",
    timestamps: false,
  }
);

export default Model;

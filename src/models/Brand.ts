// Importar Sequelize y la conexión a la base de datos
import { DataTypes, Model } from "sequelize";
import db from "../config";

// Definir el modelo de la marca de celulares
class Brand extends Model {}

// Inicializar el modelo con los atributos y opciones
Brand.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, // Conexión a la base de datos
    modelName: "Brand", // Nombre del modelo
    tableName: "brands", // Nombre de la tabla en la base de datos
    timestamps: false, // No incluir timestamps por defecto (created_at, updated_at)
  }
);

// Exportar el modelo para que pueda ser utilizado en otras partes de la aplicación
export default Brand;

import { DataTypes, Model } from "sequelize";
import sequelize from '../db/connection';
import ProductoType from "../types/Producto.type";
import {FotografiaModel} from "./fotografia";


export class TablaProducto extends Model<ProductoType>{ }

TablaProducto.init(
  //export const TablaProducto = sequelize.define('producto',
  {
    id_Producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_pro: {
      type: DataTypes.STRING(45),
      allowNull: false,

    },

    descripcion_pro: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    id_fotografia_pro: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    precio_pro: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
    },

    categoria_pro: {
      type: DataTypes.STRING(45),
      allowNull: false,

    },

    estatus_pro: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }

  },
  {
   sequelize,
    timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "producto",
  }
);

export default TablaProducto;

TablaProducto.hasMany(FotografiaModel, {
  foreignKey: "id_fotografia",
  sourceKey: "id_fotografia_pro"
});

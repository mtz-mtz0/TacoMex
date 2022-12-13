import { DataTypes, Model } from "sequelize";
import sequelize from '../db/connection';
import SesionType from "../types/sesion.type"; 
import { ClienteModel } from "./cliente";

export class SesionModel extends Model<SesionType> {}

SesionModel.init(
  {
    idSesion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_cierre:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
  },
  {
    sequelize,
    tableName: "sesion",
//    timestamps: false//Para que no se agreguen los campos CreateAt ni UpdateAt

  }
);
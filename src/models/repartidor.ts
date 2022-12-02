import { DataTypes, Model } from "sequelize";
import sequelize from '../db/connection';
import RepartidorType from "../types/repartidor.type";
import { FotografiaModel } from "./fotografia";
import { UsuarioModel } from "./usuario";

export class RepartidorModel extends Model<RepartidorType>{ }


RepartidorModel.init(
  {
    id_repartidor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_rep: {
      type: DataTypes.STRING(45),
      allowNull: false,

    },

    apellidoP_rep: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },

    apellidoM_rep: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_fotografia_rep: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },

    id_usuario_rep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    estatus_rep: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }


  },
  {
    sequelize,
    timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "repartidor",
  }

);

export default RepartidorModel;

RepartidorModel.hasMany(FotografiaModel, {
  foreignKey: "id_fotografia_rep",
  sourceKey: "id_fotografia"
});

RepartidorModel.hasMany(UsuarioModel, {
  foreignKey: "id_usuario_rep",
  sourceKey: "id_usuario"
});
import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import PedidoType from "../types/pedido.type";
import {LocalModel} from "./local";
import RepartidorModel from "./repartidor";

export class PedidoModel extends Model<PedidoType>{}

PedidoModel.init(
  {
    num_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha_ped: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true,
    },

    cantidadProd_ped: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    montoTotal_ped: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estatus_ped: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    id_local_ped: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Repartidor_id_repartidor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  { sequelize,
    timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "pedido",
  }
);


PedidoModel.hasMany(LocalModel, {
  foreignKey: "id_usuario_cli",
  sourceKey: "id_local",
});

PedidoModel.hasMany(RepartidorModel, {
  foreignKey: "Repartidor_id_repartidor",
  sourceKey: "id_repartidor",
});

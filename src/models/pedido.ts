import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import PedidoType from "../types/pedido.type";
import Local from "./local";
import Repartidor from "./repartidor";

//export class UsuarioModel extends Model<UsuarioType>{}

const Pedido = db.define(
  "Pedido",
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
    },
  },
  {
    timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "pedido",
  }
);

export default Pedido;

Pedido.hasMany(Local, {
  foreignKey: "id_usuario_cli",
  sourceKey: "id_local",
});

Pedido.hasMany(Repartidor, {
  foreignKey: "Repartidor_id_repartidor",
  sourceKey: "id_repartidor",
});

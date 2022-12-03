import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import db from '../db/connection';
import ClienteType from "../types/cliente.type";
import { FotografiaModel } from "./fotografia";
import {PedidoModel} from "./pedido";
import { UsuarioModel } from "./usuario";
//export class ClienteModel extends Model<ClienteType>{}

/**
 * Tabla clientes
 */

 export class ClienteModel extends Model<ClienteType> { }


 ClienteModel.init( {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_cli: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    apellidoP_cli: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    apellidoM_cli: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    sexo_cli: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    fecha_nac: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    id_usuario_cli: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_pedido_cli: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_fotografia_cli: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "cliente"
  },
 );



//ProveedoresModel.hasMany(ProductosModel,{foreignKey:"id_Proveedor"});
//ProductosModel.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});

ClienteModel.hasOne(UsuarioModel, {
  foreignKey: "id_usuario_cli",
  sourceKey: "id_usuario"
});

ClienteModel.hasMany(PedidoModel, {
  foreignKey: "num_pedido_cli",
  sourceKey: "num_pedido"
});


ClienteModel.hasOne(FotografiaModel, {
  foreignKey: "id_fotografia_cli",
  sourceKey: "id_fotografia"

});
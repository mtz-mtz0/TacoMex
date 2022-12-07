import { DataTypes, Model } from "sequelize";
import {sequelize} from "../db/connection";
import db from '../db/connection';
import ClienteType from "../types/cliente.type";
//import { FotografiaModel } from "./fotografia";
import {PedidoModel} from "./pedido";
import { UsuarioModel } from "./usuario";
import {TablaProducto } from "./productos";
import {} from "./productos";
//export class ClienteModel extends Model<ClienteType>{}

/**
 * Tabla clientes
 */
 export class ClienteModel extends Model<ClienteType> { }

// export const TablaCliente = db.define('cliente', {
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
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    id_usuario_cli: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

   
    password: {
      type: DataTypes.STRING,
      allowNull: true,
  }
  },
  {
    sequelize,
    timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "cliente"
 }
//},
 );



//ProveedoresModel.hasMany(TablaProducto,{foreignKey:"id_Proveedor"});
//TablaProducto.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});

//ClienteModel.hasOne(UsuarioModel, {
 // foreignKey: "id_usuario",
  //sourceKey: "id_usuario_cli"
//});



//ClienteModel.hasOne(FotografiaModel, {
 // foreignKey: "id_fotografia",
  //sourceKey: "id_fotografia_cli"

//});




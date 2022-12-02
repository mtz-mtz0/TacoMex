import { DataTypes, Model } from "sequelize";
import sequelize from '../db/connection';
import Dir_clienteType from "../types/dir_cliente.type";
import {ClienteModel} from "./cliente";
import {DireccionModel} from "./direccion";


export class dir_clienteModel extends Model<Dir_clienteType>{}

/**
 * Tabla clientes
 */
 dir_clienteModel.init(
{
  Direccion_id_Direccion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  Cliente_id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  num_dir_cli: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  { sequelize,
    timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "dir_cliente",
  }
);

//ProveedoresModel.hasMany(ProductosModel,{foreignKey:"id_Proveedor"});
//ProductosModel.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});

dir_clienteModel.hasMany(ClienteModel, {
  foreignKey: "Cliente_id_cliente",
  sourceKey: "id_cliente"
});
dir_clienteModel.hasMany(DireccionModel, {
  foreignKey: "Direccion_id_Direccion",
  sourceKey: "id_direccion"
});




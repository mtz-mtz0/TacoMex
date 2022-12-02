import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import Dir_clienteType from "../types/dir_cliente.type";
import Cliente from "./cliente";
import Direccion from "./direccion";


//export class ClienteModel extends Model<ClienteType>{}

/**
 * Tabla clientes
 */
const Dir_cliente = db.define('Cliente', {
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
  {
    timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "dir_cliente",
  }
);
export default Dir_cliente;

//ProveedoresModel.hasMany(ProductosModel,{foreignKey:"id_Proveedor"});
//ProductosModel.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});

Dir_cliente.hasMany(Cliente, {
  foreignKey: "Cliente_id_cliente",
  sourceKey: "id_cliente"
});
Dir_cliente.hasMany(Direccion, {
  foreignKey: "Direccion_id_Direccion",
  sourceKey: "id_direccion"
});




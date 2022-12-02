import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import ClienteType from "../types/cliente.type";
import Fotografia from "./fotografia";
import Pedido from "./pedido";
import Usuario from "./usuario";


//export class ClienteModel extends Model<ClienteType>{}

/**
 * Tabla clientes
 */
const Cliente = db.define('Cliente', {
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
    timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "cliente",
  }
);
export default Cliente;

//ProveedoresModel.hasMany(ProductosModel,{foreignKey:"id_Proveedor"});
//ProductosModel.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});

Cliente.hasMany(Usuario, {
  foreignKey: "id_usuario_cli",
  sourceKey: "id_usuario"
});

Cliente.hasMany(Pedido, {
  foreignKey: "num_pedido_cli",
  sourceKey: "num_pedido"
});
Cliente.hasMany(Fotografia, {
  foreignKey: "id_fotografia_cli",
  sourceKey: "id_fotografia"
});
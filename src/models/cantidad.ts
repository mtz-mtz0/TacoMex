import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import CantidadType from "../types/cantidad.type";
import Pedido from "./pedido";
import Producto from "./productos";

//export class UsuarioModel extends Model<UsuarioType>{}


const Cantidad = db.define('Cantidad', {
    Pedido_num_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Producto_id_Producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad_can: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }



},
    {
        timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
        tableName: "cantidad",


    }

);

export default Cantidad;

Cantidad.hasMany(Producto, {
    foreignKey: "Producto_id_Producto",
    sourceKey: "id_Producto"
});

Cantidad.hasMany(Pedido, {
    foreignKey: "Pedido_num_pedido",
    sourceKey: "num_pedido"
});
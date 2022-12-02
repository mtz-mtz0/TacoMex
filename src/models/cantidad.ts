import { DataTypes, Model } from "sequelize";
import sequelize from '../db/connection';
import CantidadType from "../types/cantidad.type";
import {PedidoModel} from "./pedido";
import Producto from "./productos";

export class CantidadModel extends Model<CantidadType>{ }


CantidadModel.init(
    {
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
        sequelize,
        timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
        tableName: "cantidad",


    }

);

export default CantidadModel;

CantidadModel.hasMany(Producto, {
    foreignKey: "Producto_id_Producto",
    sourceKey: "id_Producto"
});

CantidadModel.hasMany(PedidoModel, {
    foreignKey: "Pedido_num_pedido",
    sourceKey: "num_pedido"
});
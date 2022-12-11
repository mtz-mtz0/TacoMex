"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CantidadModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const pedido_1 = require("./pedido");
const productos_1 = __importDefault(require("./productos"));
class CantidadModel extends sequelize_1.Model {
}
exports.CantidadModel = CantidadModel;
CantidadModel.init({
    Pedido_num_pedido: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Producto_id_Producto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad_can: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    timestamps: false,
    tableName: "cantidad",
});
exports.default = CantidadModel;
CantidadModel.hasMany(productos_1.default, {
    foreignKey: "id_Producto",
    sourceKey: "Producto_id_Producto"
});
CantidadModel.hasMany(pedido_1.PedidoModel, {
    foreignKey: "num_pedido",
    sourceKey: "Pedido_num_pedido"
});

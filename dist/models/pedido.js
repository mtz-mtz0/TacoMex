"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const cliente_1 = require("./cliente");
const local_1 = require("./local");
const repartidor_1 = __importDefault(require("./repartidor"));
class PedidoModel extends sequelize_1.Model {
}
exports.PedidoModel = PedidoModel;
PedidoModel.init({
    num_pedido: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fecha_ped: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        unique: true,
    },
    cantidadProd_ped: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    montoTotal_ped: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    estatus_ped: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    id_local_ped: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Repartidor_id_repartidor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_cliente_ped: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, { sequelize: connection_1.default,
    timestamps: false,
    tableName: "pedido",
});
PedidoModel.hasMany(local_1.LocalModel, {
    foreignKey: "id_Local",
    sourceKey: "id_local_ped",
});
PedidoModel.hasMany(repartidor_1.default, {
    foreignKey: "id_repartidor",
    sourceKey: "Repartidor_id_repartidor",
});
PedidoModel.hasMany(cliente_1.ClienteModel, {
    foreignKey: "id_cliente",
    sourceKey: "id_cliente_ped",
});
//# sourceMappingURL=pedido.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dir_clienteModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const cliente_1 = require("./cliente");
const direccion_1 = require("./direccion");
class dir_clienteModel extends sequelize_1.Model {
}
exports.dir_clienteModel = dir_clienteModel;
/**
 * Tabla clientes
 */
dir_clienteModel.init({
    Direccion_id_Direccion: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    Cliente_id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    num_dir_cli: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, { sequelize: connection_1.default,
    timestamps: false,
    tableName: "dir_cliente",
});
//ProveedoresModel.hasMany(ProductosModel,{foreignKey:"id_Proveedor"});
//ProductosModel.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});
dir_clienteModel.hasMany(cliente_1.ClienteModel, {
    foreignKey: "id_cliente",
    sourceKey: "Cliente_id_cliente"
});
dir_clienteModel.hasMany(direccion_1.DireccionModel, {
    foreignKey: "id_Direccion",
    sourceKey: "Direccion_id_Direccion"
});

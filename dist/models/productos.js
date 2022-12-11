"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablaProducto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const fotografia_1 = require("./fotografia");
class TablaProducto extends sequelize_1.Model {
}
exports.TablaProducto = TablaProducto;
TablaProducto.init(
//export const TablaProducto = sequelize.define('producto',
{
    id_Producto: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_pro: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    descripcion_pro: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    id_fotografia_pro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    precio_pro: {
        type: sequelize_1.DataTypes.DECIMAL(10, 0),
        allowNull: false,
    },
    categoria_pro: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    estatus_pro: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    timestamps: false,
    tableName: "producto",
});
exports.default = TablaProducto;
TablaProducto.hasMany(fotografia_1.FotografiaModel, {
    foreignKey: "id_fotografia",
    sourceKey: "id_fotografia_pro"
});

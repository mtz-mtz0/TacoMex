"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const direccion_1 = require("./direccion");
const usuario_1 = require("./usuario");
//export class UsuarioModel extends Model<UsuarioType>{}
class LocalModel extends sequelize_1.Model {
}
exports.LocalModel = LocalModel;
LocalModel.init({
    id_Local: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_loc: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    telefono_loc: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    id_direccion_loc: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario_loc: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    timestamps: false,
    tableName: "local",
});
LocalModel.hasMany(direccion_1.DireccionModel, {
    foreignKey: "id_Direccion",
    sourceKey: "id_direccion_loc",
});
LocalModel.hasMany(usuario_1.UsuarioModel, {
    foreignKey: "id_usuario",
    sourceKey: "id_usuario_loc",
});

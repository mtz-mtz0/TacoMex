"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const fotografia_1 = require("./fotografia");
const usuario_1 = require("./usuario");
class RepartidorModel extends sequelize_1.Model {
}
exports.RepartidorModel = RepartidorModel;
RepartidorModel.init({
    id_repartidor: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_rep: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    apellidoP_rep: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    apellidoM_rep: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    id_fotografia_rep: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario_rep: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    estatus_rep: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    timestamps: false,
    tableName: "repartidor",
});
exports.default = RepartidorModel;
RepartidorModel.hasMany(fotografia_1.FotografiaModel, {
    foreignKey: "id_fotografia",
    sourceKey: "id_fotografia_rep"
});
RepartidorModel.hasMany(usuario_1.UsuarioModel, {
    foreignKey: "id_usuario",
    sourceKey: "id_usuario_rep"
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FotografiaModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
//export class UsuarioModel extends Model<UsuarioType>{}
class FotografiaModel extends sequelize_1.Model {
}
exports.FotografiaModel = FotografiaModel;
FotografiaModel.init({
    id_fotografia: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fotografia_fot: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: false,
    },
    tipo_fot: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    }
}, {
    sequelize: connection_1.default,
    timestamps: false,
    tableName: "fotografia",
});

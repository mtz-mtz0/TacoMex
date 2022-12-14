"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class UsuarioModel extends sequelize_1.Model {
}
exports.UsuarioModel = UsuarioModel;
UsuarioModel.init({
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    usuario_us: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: false,
        unique: true
    },
    tipo_us: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    }
}, { sequelize: connection_1.default,
    timestamps: false,
    tableName: "usuario",
});
//# sourceMappingURL=usuario.js.map
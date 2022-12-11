"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireccionModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class DireccionModel extends sequelize_1.Model {
}
exports.DireccionModel = DireccionModel;
DireccionModel.init({
    id_Direccion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigoPostal_dir: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    estado_dir: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    colonia_dir: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    calle_dir: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    numExterior_dir: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    numInterior_dir: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, { sequelize: connection_1.sequelize,
    timestamps: false,
    tableName: "direccion",
});

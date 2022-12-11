"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModel = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const usuario_1 = require("./usuario");
//export class ClienteModel extends Model<ClienteType>{}
/**
 * Tabla clientes
 */
class ClienteModel extends sequelize_1.Model {
}
exports.ClienteModel = ClienteModel;
// export const TablaCliente = db.define('cliente', {
ClienteModel.init({
    id_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_cli: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    apellidoP_cli: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    apellidoM_cli: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    sexo_cli: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
    },
    fecha_nac: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    id_usuario_cli: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: '23',
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: connection_1.sequelize,
    timestamps: false,
    tableName: "cliente"
}
//},
);
//ProveedoresModel.hasMany(TablaProducto,{foreignKey:"id_Proveedor"});
//TablaProducto.belongsTo(ProveedoresModel,{foreignKey:"id_Proveedor"});
ClienteModel.hasOne(usuario_1.UsuarioModel, {
    foreignKey: "id_usuario",
    sourceKey: "id_usuario_cli"
});
//ClienteModel.hasOne(FotografiaModel, {
// foreignKey: "id_fotografia",
//sourceKey: "id_fotografia_cli"
//});

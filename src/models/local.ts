import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import db from "../db/connection";
import LocalType from "../types/local.type";
import { DireccionModel } from "./direccion";
import { UsuarioModel } from "./usuario";

//export class UsuarioModel extends Model<UsuarioType>{}
export class LocalModel extends Model<LocalType> {}

LocalModel.init( 
  {
   id_Local:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     
    },
    nombre_loc: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },

    telefono_loc: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    id_direccion_loc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

   

    id_usuario_loc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
    tableName: "local",
  }
);

LocalModel.hasMany(DireccionModel, {
  foreignKey: "id_Direccion",
  sourceKey: "id_direccion_loc",
});



LocalModel.hasMany(UsuarioModel, {
  foreignKey: "id_usuario",
  sourceKey: "id_usuario_loc",
});
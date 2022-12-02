import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import LocalType from "../types/local.type";
import Direccion from "./direccion";
import Usuario from "./usuario";

//export class UsuarioModel extends Model<UsuarioType>{}


const Local=db.define('Local', {
    id_Local: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_Loc: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },

      id_direccion_loc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      telefono_loc:{
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      id_usuario_loc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }

    },
    {       
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "local",


    }

);

export default Local;

Local.hasMany(Direccion,{
    foreignKey:"id_direccion_loc",
    sourceKey:"id_direccion"
  });
  
  Local.hasMany(Usuario,{
    foreignKey:"id_usuario_loc",
    sourceKey:"id_usuario"
  });

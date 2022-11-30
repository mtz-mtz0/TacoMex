import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import UsuarioType from "../types/usuario.type";

export class UsuarioModel extends Model<UsuarioType>{

}


const Usuario=db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    usuario_us: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique:true
      },

      contraseña: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
  
      tipo_us:{
        type: DataTypes.STRING(30),
        allowNull: false,
      }

    },
    {       
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "usuario",


    }

);
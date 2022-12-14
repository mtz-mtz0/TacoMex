import { DataTypes, Model } from "sequelize";
import {sequelize} from "../db/connection";
// import db from '../db/connection';
import FotografiaType from "../types/fotografia.type";

//export class UsuarioModel extends Model<UsuarioType>{}

export class FotografiaModel extends Model<FotografiaType> { }

FotografiaModel.init( {
  id_fotografia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
  },
  fotografia_fot: {
      type: DataTypes.BLOB,
      allowNull: false,
    },

    tipo_fot: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }

  },
  {       
          sequelize,
          timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
          tableName: "fotografia",


  }

);
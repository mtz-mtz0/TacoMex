import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import FotografiaType from "../types/fotografia.type";

//export class UsuarioModel extends Model<UsuarioType>{}


const Fotografia=db.define('Fotografia', {
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
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "fotografia",


    }

);

export default Fotografia;
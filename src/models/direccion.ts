import { DataTypes, Model } from "sequelize";
import {sequelize} from '../db/connection';
import DireccionType from "../types/direccion.type";


export class DireccionModel extends Model<DireccionType>{}

DireccionModel.init(
{
    id_Direccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    codigoPostal_dir: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      estado_dir: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
  
      colonia_dir:{
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      calle_dir:{
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      numExterior_dir: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numInterior_dir: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      

    },
    {      sequelize,
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "direccion",


    }

);


import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import RepartidorType from "../types/repartidor.type";
import Fotografia from "./fotografia";
import Usuario from "./usuario";

//export class UsuarioModel extends Model<UsuarioType>{}


const Repartidor=db.define('Repartidor', {
    id_repartidor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_rep: {
        type: DataTypes.STRING(45),
        allowNull: false,
        
      },

      apellidoP_rep: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
  
      apellidoM_rep:{
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      id_fotografia_rep: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },

      id_usuario_rep: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estatus_rep:{
        type: DataTypes.STRING(45),
        allowNull: false,
      }


    },
    {       
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "repartidor",


    }

);

export default Repartidor;

Repartidor.hasMany(Fotografia,{
    foreignKey:"id_fotografia_rep",
    sourceKey:"id_fotografia"
  });
  
Repartidor.hasMany(Usuario,{
    foreignKey:"id_usuario_rep",
    sourceKey:"id_usuario"
  });
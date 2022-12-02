import { DataTypes, Model } from "sequelize";
import db from '../db/connection';
import ProductoType from "../types/Producto.type";
import Fotografia from "./fotografia";

//export class UsuarioModel extends Model<UsuarioType>{}


const Producto=db.define('Producto', {
    id_Producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre_pro: {
        type: DataTypes.STRING(45),
        allowNull: false,
        
      },

      descripcion_pro: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
  
      id_fotografia_pro:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio_pro:{
        type: DataTypes.DECIMAL(10,0),
        allowNull: false,
      },

      categoria_pro: {
        type: DataTypes.STRING(45),
        allowNull: false,
        
      },

      estatus_pro: {
        type: DataTypes.STRING(150),
        allowNull: false,
      }

    },
    {       
            timestamps: false,//Para que no se agreguen los campos CreateAt ni UpdateAt
            tableName: "producto",


    }

);

export default Producto;

Producto.hasMany(Fotografia,{
    foreignKey:"id_fotografia_pro",
    sourceKey:"id_usuario"
  });
  
  
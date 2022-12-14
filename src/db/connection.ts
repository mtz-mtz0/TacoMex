import {Sequelize}from "sequelize";
export const sequelize= new Sequelize('tacomex','root','damian',{host:'localhost',
dialect:'mysql',
port: 3306,


                                               //dialectOptions:{
                                                //encrypt:true,},
                                                //logging: false,
});
 
export default sequelize; 

 /*
import { Sequelize } from "sequelize";

const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_NAME = process.env.DB_NAME as string;
const DB_HOST = process.env.DB_HOST as string;
const DB_DIALECT = "mysql";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: 3306,
  dialectOptions: {
    encrypt: true,
    ssl: {
     rejectUnauthorized: false,
    },
  },
  logging:false
});

export default sequelize;

*/
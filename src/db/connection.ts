import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('tacomex','tacomex_user','z836XMnoJ1ts0vUPy1xA0S3Xub1sQGDG',{host:'dpg-cecumkp4rebeiediuoo0-a.oregon-postgres.render.com',
dialect:'postgres',
port: 5432,

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
const DB_DIALECT = "postgres";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: 5432,
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
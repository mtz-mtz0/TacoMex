import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('tacomex_sr65','tacomex_sr65_user','tGN6rs2YWLtv7kULWXkIKN7WHH29TfbC',{
host:'dpg-ced4dqen6mpgskj6po70-a.frankfurt-postgres.render.com',
dialect:'postgres',
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

import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('taco','postgres','password',{
host:'localhost',
dialect:'postgres',
port: 5432,

//dialectOptions:{
//encrypt:true,},
//logging: false,
});

export default sequelize; 

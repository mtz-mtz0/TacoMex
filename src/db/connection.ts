import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('tacomex','root','password',{
host:'localhost',
dialect:'mysql',
port: 3306,

//dialectOptions:{
//encrypt:true,},
//logging: false,
});

export default sequelize; 

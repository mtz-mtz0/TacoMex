import {Sequelize}from 'sequelize';

const db= new Sequelize('tacomex','root','password',{
host:'localhost',
dialect:'mysql',
port: 3306,
//logging: false,
});

export default db;

import {Sequelize}from 'sequelize';

const db= new Sequelize('tacomex','root','damian',{
host:'localhost',
dialect:'mysql',
port: 3306,
//logging: false,
});

export default db;

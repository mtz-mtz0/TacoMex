import {Sequelize}from 'sequelize';

const db= new Sequelize('tacomex','root','MYbd_12345',{
host:'localhost',
dialect:'mysql',
port: 3307,
//logging: false,
});

export default db;

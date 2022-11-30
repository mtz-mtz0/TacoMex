import {Sequelize}from 'sequelize';

const db= new Sequelize('tacomex','root','password',{
host:'localhost',
dialect:'mysql'
//logging: false,
});

export default db;

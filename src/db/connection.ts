/*/import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('taco','postgres','password',{
host:'localhost',
dialect:'postgres',
port: 5432,

//dialectOptions:{
//encrypt:true,},
//logging: false,
});

export default sequelize; */

import {Sequelize}from "sequelize";

export const sequelize= new Sequelize('tacomex','tacomex_user','z836XMnoJ1ts0vUPy1xA0S3Xub1sQGDG',{host:'dpg-cecumkp4rebeiediuoo0-a.oregon-postgres.render.com',
dialect:'postgres',
port: 5432,

                                               //dialectOptions:{
                                                //encrypt:true,},
                                                //logging: false,
});
 
export default sequelize;

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from "./routes/index";
import UserRouter from "./routes/usuarios"

import cors from 'cors';


import sequelize  from './db/connection' ;


class Application{

    app: express.Application;

    constructor(){
        this.app= express();
        this.settings();
        this.dbConnection();
        this.middlewares();
        //definir rutas
        this.routes();
     
    }


    settings() {
      this.app.set("port", process.env.PORT || 3000);
      this.app.set("view engine", "ejs");
      this.app.set('views', path.join(__dirname, './views'));
      this.app.use(express.static(path.join(__dirname, 'public')));

      }


async dbConnection(){

try {
  await sequelize .authenticate();
  console.log('Database online');
} catch (error) {
    throw new Error( 'error' );
}
}


middlewares(){
this.app.use(morgan('dev'));
//cors
this.app.use( cors());
//lectura del body
this.app.use(express.json());
//carpeta publica
this.app.use(express.static('public'));
}



routes(){
    this.app.use("/", indexRouter);
    this.app.use('/api/usuarios', UserRouter);
  
  }




start(){
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));

});
}




}

export default Application;
import express from 'express';
import morgan from 'morgan';
import path from 'path';
//import { create } from "express-handlebars";

import indexRouter from "./routes/index";
import cors from 'cors';



class Application{

    app: express.Application;
    private apiPath ={
      usuarios:'/api/usuarios'


    }

    constructor(){
        this.app= express();
        this.settings();
        this.middlewares();
        //definir rutas
        this.routes();
    }


    settings() {
      this.app.set("port", process.env.PORT || 3000);
      this.app.set("view engine", "ejs");
      this.app.set('views', path.join(__dirname, './views'));
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
    this.app.use(this.apiPath.usuarios, indexRouter)}




start(){
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));

});
}


}

export default Application;
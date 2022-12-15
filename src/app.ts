import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from "./routes/index";
import Usuariorouter from "./routes/usuarios"
import Direccionrouter from './routes/direccion';
import Repartidorrouter  from './routes/repartidor';
import Clienterouter from './routes/cliente';
import Productorouter from './routes/producto';
import MenuRouter from './routes/menu';
import Pedidorouter from './routes/pedido';
import cors from 'cors';
import sequelize  from './db/connection' ;
import dotenv from "dotenv";
import flash from 'connect-flash';
import session from 'express-session';


class Application{

    app: express.Application;

    constructor(){
        this.app= express();
        this.settings();
        this.dbConnection();
        this.middlewares();
        //definir rutas
        this.routes();
        this.global();
     //   dotenv.config();
// require('dotenv').config({path:'./.env'});

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
this.app.use(express.urlencoded({ extended: true }))

this.app.use(morgan('dev'));
//cors
this.app.use( cors());
//lectura del body
this.app.use(express.json());
//carpeta publica
this.app.use(express.static('public'));

this.app.use(session({
  name: "session-cookie",
  secret: "secreto123",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    signed: true,
    maxAge: 5 * (60 * 1000),
  },
}))
}



routes(){
   this.app.use("/", indexRouter);
   this.app.use('/api/usuario', Usuariorouter);
   this.app.use("/api/direccion",Direccionrouter);
   this.app.use("/api/cliente",Clienterouter);
   this.app.use("/api/repartidor",Repartidorrouter);
   this.app.use("/api/producto",Productorouter);
   this.app.use("/api/menu",MenuRouter);
   this.app.use("/api/pedido",Pedidorouter);

  }

global(){
  this.app.use(flash())
//global variable
  this.app.use((req, res, next) => {
  this.app.locals.logged = req.flash('user')
  this.app.locals.idlogged = req.flash('id')
  next()
})


}


start(){
//  await sequelize.sync({force:true})  
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));

});
}




}

export default Application;
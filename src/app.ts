import express from 'express';
import morgan from 'morgan';
import path from 'path';
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index";
//import UserRouter from "./routes/usuarios"
import Direccionrouter from './routes/direccion';
import Repartidorrouter from './routes/repartidor';
import Clienterouter from './routes/cliente';
import Productorouter from './routes/producto';

import cors from 'cors';

const app = express()

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
//cors
app.use(cors());
//lectura del body
app.use(express.json());
//carpeta publica
app.use(express.static('public'));



app.use("/", indexRouter);
//  app.use('/api/usuarios', UserRouter);
app.use("/api/direccion", Direccionrouter);
app.use("/api/cliente", Clienterouter);
app.use("/api/repartidor", Repartidorrouter);
app.use("/api/producto", Productorouter);


export default app;
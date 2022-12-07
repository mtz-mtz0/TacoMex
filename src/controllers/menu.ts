import { NextFunction, Request, Response } from "express";
import {TablaProducto} from "../models/productos";
//import { ProductoModel } from "../models/productos";
import db from '../db/connection';




export async function indexViewProducto(req: Request, res: Response) {
  return res.render('../views/productos/producto-view');
}

//export async function indexMenu(req: Request, res: Response) {
  //return res.render('../views/Principal/menu',{title: 'Menu' });}


 
    export async function indexMenu(req: Request, res: Response) {
      try {
       // const records= await TablaProducto.findAll(
          const productos = await TablaProducto.findAll({ raw: true })

          //{where: { descripcion_pro: 'adrian'  }    }  
          const data = { httpCode: 0, message: "", productos }

        res.render("../views/Principal/menu", data);
      } catch (error) {
        console.log(error);
        res.status(500).json({
          msg: 'habla con el administrador plox'
        })
      }
    }


    


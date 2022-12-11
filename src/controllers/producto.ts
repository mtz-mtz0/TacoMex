import { NextFunction, Request, Response } from "express";
import { TablaProducto } from "../models/productos";
import db from '../db/connection';
import { sequelize } from "../db/connection";
import { where } from "sequelize";


/*/declare module 'express-session'{
  export interface SessionData{
      admin:String[]
  }
}/*

/* GET home page(editar_usuarios ejs)*/

export async function indexViewProducto(req: Request, res: Response) {
  return res.render('../views/productos/producto-view',);
} 



//export async function indexMenu(req: Request, res: Response) {
//return res.render('../views/Principal/menu',{title: 'Menu' });}



export async function indexMenu(req: Request, res: Response) {
  try {
    // const records= await TablaProducto.findAll(
    const records = await TablaProducto.findAll({ raw: true })

    //{where: { descripcion_pro: 'adrian'  }    }  
    const data = { httpCode: 0, message: "", records }

    res.render("../views/Principal/menu", data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador plox'
    })
  }
}






//muestra todos los usuarios
//localhost:3000/api/producto 
export async function readProducto(req: Request, res: Response) {
  try {
    const { query: where } = req
    const productos = await TablaProducto.findAll({
      attributes: [
        "id_Producto", "nombre_pro", "descripcion_pro", "id_fotografia_pro",
        "precio_pro", "categoria_pro", "estatus_pro"],
      raw: true,
      where 
    });
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}





//insertar Producto
export async function createProducto(req: Request, res: Response) {

  try {
    const { body } = req;
    const productoResponse = await TablaProducto.create(body, { raw: true });
   
   // res.status(201).json();
    indexViewProducto(req, res)

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}




//actualizar producto
//localhost:3000/api/direccion/update/1
export async function updateProducto(req: Request, res: Response) {
  try {
    const { body } = req;
    const { id_Producto } = req.params;

    const entity = await TablaProducto.findByPk(id_Producto);
    await entity?.update(body);
    res.status(201).json(entity?.toJSON());
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}

//eliminar registros: Delete
//localhost:3000/api/producto/2
export async function deleteProducto(req: Request, res: Response) {
  try {
    const { id_Producto } = req.params;
    const entity = await TablaProducto.findByPk(id_Producto);
    await entity?.destroy();
    res.status(204).json({ ok: "" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}

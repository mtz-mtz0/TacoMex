import { NextFunction, Request, Response } from "express";
import db from '../db/connection';
import { sequelize } from "../db/connection";
import { where } from "sequelize";
import { PedidoModel } from "../models/pedido";


/* GET home page(editar_usuarios ejs)*/
export async function indexViewPedido(req: Request, res: Response) {
  return res.render('../views/pedido/pedido-view');
}


//muestra todos los usuarios
//localhost:3000/api/producto 
export async function readPedido(req: Request, res: Response) {
  try {
    const { query: where } = req
    const pedido = await PedidoModel.findAll({
      attributes: [
        "num_pedido", "fecha_ped", "cantidadProd_ped","montoTotal_ped","estatus_ped",
        "id_local_ped", "Repartidor_id_repartidor", "id_cliente_ped"],
      raw: true,
      where 
    });
    res.status(200).json(pedido);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}





//insertar Producto
export async function createPedido(req: Request, res: Response) {
  try {
    const { body } = req;
    const pedidoresponse = await PedidoModel.create(body, { raw: true });
   
   // res.status(201).json();

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}




//actualizar producto
//localhost:3000/api/direccion/update/1
export async function updatePedido(req: Request, res: Response) {
  try {
    const { body } = req;
    const { num_pedido } = req.params;

    const entity = await PedidoModel.findByPk(num_pedido);
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
export async function deletePedido(req: Request, res: Response) {
  try {
    const { num_pedido } = req.params;
    const entity = await PedidoModel.findByPk(num_pedido);
    await entity?.destroy();
    res.status(204).json({ ok: "" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
    })
  }
}
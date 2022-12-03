import { Request, Response } from "express";
import { ProductoModel } from "../models/productos";


/* GET home page(editar_usuarios ejs)*/
export async function indexViewProducto(req: Request, res: Response) {
  return res.render('../views/productos/producto-view');
}

//muestra todos los usuarios
//localhost:3000/api/producto 
export async function readProducto(req: Request, res: Response) {
  try {
    const { query: where } = req
    const productos = await ProductoModel.findAll({
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
    const productoResponse = await ProductoModel.create(body, { raw: true });
    res.status(201).json(productoResponse);
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
    const { id_Producto } = req.params;
    const { body } = req;
    const entity = await ProductoModel.findByPk(id_Producto);
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
export async function deleteProducto(req: Request,res: Response){
  try {
     const{id_Producto}=req.params;
     const entity=await ProductoModel.findByPk(id_Producto);
     await entity?.destroy();
     res.status(204).json({ok:""});


  } catch (error) {
     console.log(error);
     res.status(500).json({
         msg:'habla con el administrador'
     })
  }
}
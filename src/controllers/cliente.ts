import { Request, Response } from "express";
import {ClienteModel} from "../models/cliente";

/* GET home page(editar_usuarios ejs)*/


  export async function indexViewCliente(req: Request, res: Response) {
    return res.render('../views/cliente/cliente-view');
  }


//muestra todos los usuarios
//localhost:3000/api/direccion 
export async function readCliente(req: Request,res: Response){
    try {
        const{query:where}=req
        const clientes= await ClienteModel.findAll({
         attributes:[
            "id_cliente", "nombre_cli", "apellidoP_cli","apellidoM_cli","sexo_cli", "fecha_nac",
            "telefono","id_usuario_cli","num_pedido_cli","id_fotografia_cli"
        
        ],
            raw:true,
            where   
        });
        res.status(200).json(clientes);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }



//insertar clientes
//post
  export async function createClientes(req: Request,res: Response){
    try {
        const{body}= req;
       const clienteResponse=await ClienteModel.create(body,{raw:true});
       res.status(201).json(clienteResponse);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }


//actualizar direccion
//localhost:3000/api/direccion/update/1
export async function updateCliente(req: Request,res: Response){
   
    try {
        const{id_cliente}=req.params;
        const{body}=req;
        const entity= await ClienteModel.findByPk(id_cliente);
        await entity?.update(body);
        res.status(201).json(entity?.toJSON());
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }



  //eliminar registros: Delete
  //localhost:3000/api/direccion/2
  export async function deleteCliente(req: Request,res: Response){
    try {
        const{id_cliente}=req.params;
       
       const entity=await ClienteModel.findByPk(id_cliente);
       await entity?.destroy();
       res.status(204).json({ok:""});
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }

  
import { Request, Response } from "express";
import {RepartidorModel} from "../models/repartidor";

/* GET home page(editar_usuarios ejs)*/


  export async function indexViewDireccion(req: Request, res: Response) {
    return res.render('../views/repartidor/repartidor-view');
  }


//muestra todos los usuarios
//localhost:3000/api/repartidor 
export async function readRepartidor(req: Request,res: Response){
    try {
        const{query:where}=req
        const direcciones= await RepartidorModel.findAll({
         attributes:[
            "id_repartidor", "nombre_rep","apellidoP_rep","apellidoM_rep",
            "id_fotografia_rep","id_usuario_rep","estatus_rep"],
            raw:true,
            where   
        });
        res.status(200).json(direcciones);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }



//insertar repartidor 
//post
  export async function createRepartidor(req: Request,res: Response){
    try {
        const{body}= req;
       const repartidorResponse=await RepartidorModel.create(body,{raw:true});
       res.status(201).json(repartidorResponse);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }


//actualizar repartidor
//localhost:3000/api/repartidor/update/1
export async function updateRepartidor(req: Request,res: Response){
   
    try {
        const{id_Repartidor}=req.params;
        const{body}=req;
        const entity= await RepartidorModel.findByPk(id_Repartidor);
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
  //localhost:3000/api/repartidor/2
  export async function deleteRepartidor(req: Request,res: Response){
    try {
        const{id_Repartidor}=req.params;
       
       const entity=await RepartidorModel.findByPk(id_Repartidor);
       await entity?.destroy();
       res.status(204).json({ok:""});
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }

  

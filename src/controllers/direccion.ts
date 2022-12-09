import { Request, Response } from "express";
import {DireccionModel} from "../models/direccion";

/* GET home page(editar_usuarios ejs)*/


  export async function indexViewDireccion(req: Request, res: Response) {
    return res.render('../views/direccion/direccion-view');
  }


//muestra todos los usuarios
//localhost:3000/api/direccion 
export async function readDireccion(req: Request,res: Response){
    try {
        const{query:where}=req
        const direcciones= await DireccionModel.findAll({
         attributes:[
            "id_Direccion", "codigoPostal_dir","estado_dir","colonia_dir",
            "calle_dir","numExterior_dir","numInterior_dir"],
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



//insertar direccion 
//post
  export async function createDireccion(req: Request,res: Response){
    try {
        const{body}= req;
       const direccionResponse=await DireccionModel.create(body,{raw:true});
     //  res.status(201).json(direccionResponse);
     res.render('index', { title: 'TacoMex' });

    
      } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }






  
//actualizar direccion
//localhost:3000/api/direccion/update/1
export async function updateDireccion(req: Request,res: Response){
   
    try {
        const{id_Direccion}=req.params;
        const{body}=req;
        const entity= await DireccionModel.findByPk(id_Direccion);
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
  export async function deleteDireccion(req: Request,res: Response){
    try {
        const{id_Direccion}=req.params;
       
       const entity=await DireccionModel.findByPk(id_Direccion);
       await entity?.destroy();
       res.status(204).json({ok:""});
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }

  

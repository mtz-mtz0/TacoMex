import { Request, Response } from "express";
import { UsuarioModel } from "../models/usuario";

/* GET home page(editar_usuarios ejs)*/


  export async function indexViewUsuario(req: Request, res: Response) {
    return res.render('../views/usuario/usuario-view');
  }


//muestra todos los usuarios
//localhost:3000/api/direccion 
export async function readUsuario(req: Request,res: Response){
    try {
        const{query:where}=req
        const usuarios= await UsuarioModel.findAll({
         attributes:[
            "id_usuario", "usuario_us", "contraseña","tipo_us"
        ],
            raw:true,
            where   
        });
        res.status(200).json(usuarios);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }



//insertar direccion 
//post
  export async function createUsuarios(req: Request,res: Response){
    try {
        const{body}= req;
       const usuarioResponse=await UsuarioModel.create(body,{raw:true});
       indexViewUsuario(req, res)
       // res.status(201).json(usuarioResponse);
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
    }
  }


//actualizar direccion
//localhost:3000/api/direccion/update/1
export async function updateUsuario(req: Request,res: Response){
   
    try {
        const{id_usuario}=req.params;
        const{body}=req;
        const entity= await UsuarioModel.findByPk(id_usuario);
        await entity?.update(body);
        res.status(201).json(entity?.toJSON());
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador, no pudimos actualizarlo'
       })
    }
  }



  //eliminar registros: Delete
  //localhost:3000/api/direccion/2
  export async function deleteUsuario(req: Request,res: Response){
    try {
       const{id_usuario}=req.params;
       const entity=await UsuarioModel.findByPk(id_usuario);
       await entity?.destroy();
       res.status(204).json({ok:""});
  
  
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
          })
        }
      }





      
  

  



        
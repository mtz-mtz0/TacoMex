import { Request, Response } from "express";
import Usuario from "../models/usuario";


//muestra todos los usuarios
export const getUsuarios = async(req: Request,res: Response) =>{
    const usuarios= await Usuario.findAll();
res.json({usuarios});
}

//muestra usuarios por el numero de id
export const getUsuario =async (req: Request,res: Response) =>{
    const{id}= req.params;
    const usuario=await Usuario.findByPk(id);
    if(usuario){
        res.json(usuario);
    }else{
    res.status(404).json({
        msg:`No existe un usuario con el numero de  id ${id}` 
    })
    }
    }


//inserta usuarios
    export const postUsuario =async (req: Request, res: Response) =>{
        const{body}= req;

     try {
       
        const existe_usuario_us = await Usuario.findOne({
            where:{
                usuario_us: body.usuario_us
            }
        });
        if(existe_usuario_us){
            return res.status(400).json({
                msg:'Ya existe un usuario con ese nombre' + body.usuario_us
            });
        }
        const usuario=Usuario.build(body);
        await usuario.save();
        res.json(usuario);


     } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'habla con el administrador'
        })
     }
        }



///falta corregir el put  --- actualizar registros
    export const putUsuario = async(req: Request,res: Response) =>{
        const{id}= req.params;
        const{body}= req;
        try {
           const usuario= await Usuario.findByPk(id);
           if( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id'+id
            });
           }
           await usuario.update(body);
           res.json(usuario);
    
         } catch (error) {
            console.log(error);
            res.status(500).json({
                msg:'habla con el administrador'
            })
         }

        }
        


      

//borra el usuario de la base de datos
        export const deleteUsuario =async (req: Request,res: Response) =>{
            const{id}= req.params;
            const usuario= await Usuario.findByPk(id);
            if( !usuario ) {
             return res.status(404).json({
                 msg: 'No existe un usuario con este numero de  id'+id
             });
            }
            //la siguiente linea cambia el atributo estado a 0 pero en nuestra base de datos no lo tenemos
         //   await usuario.update({estado:false});
            await usuario.destroy();
             res.json(usuario);
             }

        
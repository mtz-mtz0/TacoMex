import { Request, Response } from "express";
import {ClienteModel} from "../models/cliente";

/* GET home page(editar_usuarios ejs)*/


  export async function indexViewCliente(req: Request, res: Response) {
    return res.render('../views/cliente/cliente');
  }


  
//CRUD
export async function getCliente(req: Request, res: Response) {
    try {
      const { id_cliente } = req.params
      const tutor = await ClienteModel.findOne({
        where: {
          id_cliente
        }
      })
      res.status(201).json(tutor)
    } catch (error) {
      console.log(error)
    }
  }
  
  export async function createCliente(req: Request, res: Response) {
    const { nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli, fecha_nac,telefono, id_usuario_cli, id_fotografia_cli, password } = req.body
    const passwordRandom = Math.random().toString(36).slice(-11)
//    let password = await bcrypt.hash(passwordRandom, 8)
    // let password = '123'
    const{body}= req;

    try {
      await ClienteModel.create(body,{raw:true});
    
  
   
    } catch (error) {
      console.log(error)
    }
  
  }
  
  export async function updateCliente(req: Request, res: Response) {
    // try {
    //   const { idTutor } = req.params
    //   const { body } = req
    //   const tutorId = await TablaTutor.findByPk(idTutor)
    //   await tutorId?.update(body)
    // } catch (error) {
    //   console.log(error);
    // }
  }
  
  export async function deleteCliente(req: Request, res: Response) {
    try {
      const { id_cliente } = req.params;
      const entity = await ClienteModel.findByPk(id_cliente);
     // await entity?.destroy()
    } catch (error) {
      console.log(error);
    }
  }
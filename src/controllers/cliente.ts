import { Request, Response } from "express";
import {ClienteModel} from "../models/cliente";
import { indexViewDireccion } from "./direccion";

/* GET home page(editar_usuarios ejs)*/




  export async function indexViewCliente(req: Request, res: Response) {
    try {
      const records = await ClienteModel.findAll({ raw: true })
      const data = { httpCode: 0, message: "", records }
      //res.render("templates/tutor/tutor-crud", data)
        res.render('../views/cliente/cliente',data);

      // res.status(201).json(records)
    } catch (error) {
      console.log(error)
    }
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
  
  export async function createCliente(req: Request,res: Response){
    try {
        const{body}= req;
       const clienteResponse=await ClienteModel.create(body,{raw:true});

       indexViewDireccion(req, res)
       //res.status(201).json();
       
    } catch (error) {
       console.log(error);
       res.status(500).json({
           msg:'habla con el administrador'
       })
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
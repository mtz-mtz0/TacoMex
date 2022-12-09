import { Request, Response } from "express";
import {ClienteModel} from "../models/cliente";
import { indexViewDireccion } from "./direccion";
import bcrypt from 'bcryptjs';
import nodemailer from "nodemailer";

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
    
       //const{body}= req;
       const {nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli,
      fecha_nac, telefono, id_usuario_cli, email}= req.body
       
       
      const passwordBCRYPT = Math.random().toString(36).slice(-11);
       let password = await bcrypt.hash(passwordBCRYPT, 8);
       
       try {
      await ClienteModel.create({nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli,
        fecha_nac, telefono, id_usuario_cli, email, password});
        

        const mailer = nodemailer.createTransport({
          host:"smtp.gmail.com",
          port: 465,
          secure: true,
          auth:{
          user: 'tacomex.local@gmail.com',
          pass: 'nwwtqvdiujccidrz'
        }})

       await mailer.sendMail({
          from: ' <tacomex.local@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hellaaaaa", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world? i am adria</b>"+email+' password'+passwordBCRYPT, // html body 

         } )



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
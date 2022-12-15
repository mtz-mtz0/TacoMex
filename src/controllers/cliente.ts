import { Request, Response } from "express";
import { ClienteModel } from "../models/cliente";
import { indexViewDireccion } from "./direccion";
import bcrypt, { compare } from 'bcryptjs';
import nodemailer from "nodemailer";
import { createPedido } from "./pedido";
import comparar from "../middlewares/comparar.contrasenas";
import { SesionModel } from "../models/sesion.model";
//import {admin} from "../controllers/producto";

/* GET home page(editar_usuarios ejs)*/







export async function indexViewCliente(req: Request, res: Response) {
  try {
    const records = await ClienteModel.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    //res.render("templates/tutor/tutor-crud", data)
    res.render('../views/cliente/cliente', data);
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}





export async function indexViewLogin(req: Request, res: Response) {
  try {
    const records = await ClienteModel.findAll({ raw: true })
    const data = { httpCode: 0, message: "", records }
    //res.render("templates/tutor/tutor-crud", data)
    res.render('../views/Usuario/inicio_sesion', data);
    // res.status(201).json(records)
  } catch (error) {
    console.log(error)
  }
}



var id_cli:any;
let contrasena: any, id_usuario_cli:any, datos:any;
export async function iniciando(req: Request, res: Response) {
  try {
    const { email, password} = req.body
    const cliente = await ClienteModel.findOne({ where: { email: email } })

    await ClienteModel.findOne({ where: { email: email } })
      .then(result => contrasena = result?.getDataValue('password'));
      
    await ClienteModel.findOne({ where: { email: email } })
      .then(result => id_usuario_cli = result?.getDataValue('id_usuario_cli'));

   

const usuarioResponse=await ClienteModel.findOne({raw:true, where:{email}})
const user= JSON.parse(JSON.stringify(usuarioResponse))

    console.log(id_usuario_cli);  
    if (cliente) {

      const com = bcrypt.compareSync(password, contrasena);
      if (com && id_usuario_cli=="23") {
       
        const id_cliente=user["id_cliente"];
        const sessionRegistro= await SesionModel.create({id_cliente},{raw:true})
        req.session.user2=user._id;

        const data={httpCode:0,user}
        res.render('index',data);

      } else if (com && id_usuario_cli=="35") {

          return res.render('../views/pedido/pedido-view');
      } else { res.send('<strong>contraseña incorrecta</strong>') }
    } else {
      res.send('<strong>usuario no existe</strong>')
    }
  } catch (error) {
    res.status(500).json({
      msg: 'habla con el administrador'
    })

  }
}






//CRUD
export async function getCliente(req: Request, res: Response) {
  try {
    const { id_cliente } = req.params
    const cliente = await ClienteModel.findOne({
      where: {
        id_cliente
      }
    })
    res.status(201).json(cliente)
  } catch (error) {
    console.log(error)
  }
}

export async function createCliente(req: Request, res: Response) {

  const { body } = req;
  const { nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli,
    fecha_nac, telefono, id_usuario_cli, email } = req.body

  const passwordBCRYPT = Math.random().toString(36).slice(-11);
  let password = await bcrypt.hash(passwordBCRYPT, 8);

  try {
    await ClienteModel.create({
      nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli,
      fecha_nac, telefono, id_usuario_cli, email, password
    });


    // const mailer = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: 'tacomex.local@gmail.com',
    //     pass: 'nwwtqvdiujccidrz'
    //   }
    // })

    // await mailer.sendMail({
    //   from: ' <tacomex.local@gmail.com>', // sender address
    //   to: email, // list of receivers
    //   subject: "Registro en tacomex", // Subject line
    //   text: "BIENVENIDOOO", // plain text body
    //   html: "<b>Hola, te registrado en tacomex con el siguiente email: </b>" + email + ' tu contraseña es: ' + passwordBCRYPT, // html body 

    // })

    indexViewDireccion(req, res)
    //res.status(201).json();  
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'habla con el administrador'
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




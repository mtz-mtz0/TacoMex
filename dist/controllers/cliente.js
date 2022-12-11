"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.getCliente = exports.iniciando = exports.indexViewLogin = exports.indexViewCliente = void 0;
const cliente_1 = require("../models/cliente");
const direccion_1 = require("./direccion");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
//import {admin} from "../controllers/producto";
/* GET home page(editar_usuarios ejs)*/
function indexViewCliente(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const records = yield cliente_1.ClienteModel.findAll({ raw: true });
            const data = { httpCode: 0, message: "", records };
            //res.render("templates/tutor/tutor-crud", data)
            res.render('../views/cliente/cliente', data);
            // res.status(201).json(records)
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.indexViewCliente = indexViewCliente;
function indexViewLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const records = yield cliente_1.ClienteModel.findAll({ raw: true });
            const data = { httpCode: 0, message: "", records };
            //res.render("templates/tutor/tutor-crud", data)
            res.render('../views/Usuario/inicio_sesion', data);
            // res.status(201).json(records)
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.indexViewLogin = indexViewLogin;
let contrasena, id_usuario_cli;
function iniciando(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const cliente = yield cliente_1.ClienteModel.findOne({ where: { email: email } });
            yield cliente_1.ClienteModel.findOne({ where: { email: email } })
                .then(result => contrasena = result === null || result === void 0 ? void 0 : result.getDataValue('password'));
            yield cliente_1.ClienteModel.findOne({ where: { email: email } })
                .then(result => id_usuario_cli = result === null || result === void 0 ? void 0 : result.getDataValue('id_usuario_cli'));
            console.log(id_usuario_cli);
            if (cliente) {
                const com = bcryptjs_1.default.compareSync(password, contrasena);
                if (com && id_usuario_cli == "23") {
                    res.render('index', { title: 'TacoMex' });
                }
                else if (com && id_usuario_cli == "35") {
                    return res.render('../views/pedido/pedido-view');
                }
                else {
                    res.send('<strong>contraseña incorrecta</strong>');
                }
            }
            else {
                res.send('<strong>usuario no existe</strong>');
            }
        }
        catch (error) {
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.iniciando = iniciando;
//CRUD
function getCliente(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_cliente } = req.params;
            const cliente = yield cliente_1.ClienteModel.findOne({
                where: {
                    id_cliente
                }
            });
            res.status(201).json(cliente);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getCliente = getCliente;
function createCliente(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        const { nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli, fecha_nac, telefono, id_usuario_cli, email } = req.body;
        const passwordBCRYPT = Math.random().toString(36).slice(-11);
        let password = yield bcryptjs_1.default.hash(passwordBCRYPT, 8);
        try {
            yield cliente_1.ClienteModel.create({
                nombre_cli, apellidoP_cli, apellidoM_cli, sexo_cli,
                fecha_nac, telefono, id_usuario_cli, email, password
            });
            const mailer = nodemailer_1.default.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: 'tacomex.local@gmail.com',
                    pass: 'nwwtqvdiujccidrz'
                }
            });
            yield mailer.sendMail({
                from: ' <tacomex.local@gmail.com>',
                to: email,
                subject: "Registro en tacomex",
                text: "BIENVENIDOOO",
                html: "<b>Hola, te registrado en tacomex con el siguiente email: </b>" + email + ' tu contraseña es: ' + passwordBCRYPT, // html body 
            });
            (0, direccion_1.indexViewDireccion)(req, res);
            //res.status(201).json();  
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createCliente = createCliente;
function updateCliente(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.updateCliente = updateCliente;
function deleteCliente(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_cliente } = req.params;
            const entity = yield cliente_1.ClienteModel.findByPk(id_cliente);
            // await entity?.destroy()
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteCliente = deleteCliente;

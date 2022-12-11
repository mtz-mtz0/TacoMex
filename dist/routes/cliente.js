"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const direccion_1 = require("../controllers/direccion");
const Clienterouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
//Clienterouter.get("/view", indexViewCliente);
//routes /tutor
//Clienterouter.get('/login', viewTutorLogin)
//Clienterouter.get('/register', viewTutorRegister)
Clienterouter.get('/view', cliente_1.indexViewCliente);
Clienterouter.get('/login', cliente_1.indexViewLogin);
//CRUD TUTOR
Clienterouter.post('/register', cliente_1.createCliente);
Clienterouter.post('/register2', direccion_1.createDireccion);
Clienterouter.get('/crud/:id_cliente', cliente_1.getCliente);
Clienterouter.put('/crud/:id_cliente', cliente_1.updateCliente);
Clienterouter.delete('/crud/:id_cliente', cliente_1.deleteCliente);
Clienterouter.post('/iniciando', cliente_1.iniciando);
exports.default = Clienterouter;

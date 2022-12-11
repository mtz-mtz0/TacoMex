"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccion_1 = require("../controllers/direccion");
const Direccionrouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
Direccionrouter.get("/view", direccion_1.indexViewDireccion);
Direccionrouter.get("/", direccion_1.readDireccion);
Direccionrouter.post("/register2", direccion_1.createDireccion);
Direccionrouter.post("/update/:id_Direccion", direccion_1.updateDireccion);
Direccionrouter.delete("/:id_Direccion", direccion_1.deleteDireccion);
exports.default = Direccionrouter;

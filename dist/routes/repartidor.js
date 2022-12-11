"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const repartidor_1 = require("../controllers/repartidor");
const Repartidorrouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
Repartidorrouter.get("/view", repartidor_1.indexViewRepartidor);
Repartidorrouter.get("/", repartidor_1.readRepartidor);
Repartidorrouter.post("/register", repartidor_1.createRepartidor);
Repartidorrouter.post("/update/:id_repartidor", repartidor_1.updateRepartidor);
Repartidorrouter.delete("/:id_repartidor", repartidor_1.deleteRepartidor);
exports.default = Repartidorrouter;

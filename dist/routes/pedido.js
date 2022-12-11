"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_1 = require("../controllers/pedido");
const Pedidorouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
Pedidorouter.get("/view", pedido_1.indexViewPedido);
Pedidorouter.get("/", pedido_1.readPedido);
Pedidorouter.post("/register", pedido_1.createPedido);
Pedidorouter.post("/update/:num_pedido", pedido_1.updatePedido);
Pedidorouter.delete("/:num_pedido", pedido_1.deletePedido);
exports.default = Pedidorouter;

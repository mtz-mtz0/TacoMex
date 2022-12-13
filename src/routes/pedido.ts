import { Router } from "express";
import { createPedido, deletePedido, indexViewPedido, indexViewPedidoC, readPedido, updatePedido } from "../controllers/pedido";
const Pedidorouter=Router();

/* GET home page(editar_usuarios ejs)*/
Pedidorouter.get("/view", indexViewPedido);
Pedidorouter.get("/cliente", indexViewPedidoC);

Pedidorouter.get("/",readPedido);
Pedidorouter.post("/register",createPedido);
Pedidorouter.post("/update/:num_pedido",updatePedido);
Pedidorouter.delete("/:num_pedido",deletePedido);


export default Pedidorouter;
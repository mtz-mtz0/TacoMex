import { Router } from "express";
import { createClientes, deleteCliente, indexViewCliente, readCliente, updateCliente } from "../controllers/cliente";


const Clienterouter=Router();


/* GET home page(editar_usuarios ejs)*/
Clienterouter.get("/view", indexViewCliente);
Clienterouter.get("/",readCliente);
Clienterouter.post("/",createClientes);
Clienterouter.post("/update/:id_cliente",updateCliente);
Clienterouter.delete("/:id_cliente",deleteCliente);

export default Clienterouter;
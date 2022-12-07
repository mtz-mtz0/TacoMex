import { Router } from "express";
import { createRepartidor, deleteRepartidor, indexViewRepartidor, readRepartidor, updateRepartidor } from "../controllers/repartidor";


const Repartidorrouter=Router();


/* GET home page(editar_usuarios ejs)*/
Repartidorrouter.get("/view", indexViewRepartidor);
Repartidorrouter.get("/",readRepartidor);
Repartidorrouter.post("/register",createRepartidor);
Repartidorrouter.post("/update/:id_repartidor",updateRepartidor);
Repartidorrouter.delete("/:id_repartidor",deleteRepartidor);

export default Repartidorrouter;
import { Router } from "express";
import { createDireccion, deleteDireccion, indexViewDireccion, readDireccion, updateDireccion } from "../controllers/direccion";


const Direccionrouter=Router();


/* GET home page(editar_usuarios ejs)*/
Direccionrouter.get("/view", indexViewDireccion);
Direccionrouter.get("/",readDireccion);
Direccionrouter.post("/register2",createDireccion);
Direccionrouter.post("/update/:id_Direccion",updateDireccion);
Direccionrouter.delete("/:id_Direccion",deleteDireccion);

export default Direccionrouter;
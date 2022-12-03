import { Router } from "express";
import { createUsuarios, deleteUsuario, indexViewUsuario, readUsuario, updateUsuario } from "../controllers/usuario";


const Usuariorouter=Router();


/* GET home page(editar_usuarios ejs)*/
Usuariorouter.get("/view", indexViewUsuario);
Usuariorouter.get("/",readUsuario);
Usuariorouter.post("/",createUsuarios);
Usuariorouter.post("/update/:id_usuario",updateUsuario);
Usuariorouter.delete("/:id_usuario",deleteUsuario);

export default Usuariorouter;
import { Router } from "express";
import { getUsuarios,getUsuario, postUsuario, deleteUsuario } from "../controllers/usuario";


const Usuariorouter=Router();


/* GET home page(editar_usuarios ejs)*/

Usuariorouter.get('/',getUsuarios);
Usuariorouter.get('/:id',getUsuario);
Usuariorouter.post('/',postUsuario);
Usuariorouter.put('/:id', getUsuarios);
Usuariorouter.delete('/:id',deleteUsuario);

export default Usuariorouter;
import { Router } from "express";
import { getUsuarios,getUsuario, postUsuario, deleteUsuario,putUsuario, indexViewUsuario } from "../controllers/usuario";


const Usuariorouter=Router();


/* GET home page(editar_usuarios ejs)*/
Usuariorouter.get("/view", indexViewUsuario);
Usuariorouter.get('/',getUsuarios);
Usuariorouter.get('/:id',getUsuario);
Usuariorouter.post('/',postUsuario);
Usuariorouter.put('/:id', putUsuario);
Usuariorouter.delete('/:id',deleteUsuario);

export default Usuariorouter;
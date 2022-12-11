import { Router } from "express";
import { indexViewCliente , createCliente, getCliente, updateCliente, deleteCliente, indexViewLogin, iniciando} from "../controllers/cliente";
import { createDireccion } from "../controllers/direccion";


const Clienterouter=Router();


/* GET home page(editar_usuarios ejs)*/
//Clienterouter.get("/view", indexViewCliente);


//routes /tutor
//Clienterouter.get('/login', viewTutorLogin)
//Clienterouter.get('/register', viewTutorRegister)


Clienterouter.get('/view', indexViewCliente)

Clienterouter.get('/login', indexViewLogin)
//CRUD TUTOR
Clienterouter.post('/register', createCliente)
Clienterouter.post('/register2', createDireccion)
Clienterouter.get('/crud/:id_cliente', getCliente)
Clienterouter.put('/crud/:id_cliente', updateCliente)
Clienterouter.delete('/crud/:id_cliente', deleteCliente)


Clienterouter.post('/iniciando', iniciando)

export default Clienterouter;
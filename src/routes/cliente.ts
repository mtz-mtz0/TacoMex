import { Router } from "express";
import { indexViewCliente , createCliente, getCliente, updateCliente, deleteCliente, indexViewLogin, indexViewIniciando} from "../controllers/cliente";


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
Clienterouter.get('/crud/:id_cliente', getCliente)
Clienterouter.put('/crud/:id_cliente', updateCliente)
Clienterouter.delete('/crud/:id_cliente', deleteCliente)


Clienterouter.get('/iniciando', indexViewIniciando)

export default Clienterouter;
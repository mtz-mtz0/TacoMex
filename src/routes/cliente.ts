import { Router } from "express";
import { indexViewCliente , createCliente, getCliente, updateCliente, deleteCliente} from "../controllers/cliente";


const Clienterouter=Router();


/* GET home page(editar_usuarios ejs)*/
//Clienterouter.get("/view", indexViewCliente);


//routes /tutor
//Clienterouter.get('/login', viewTutorLogin)
//Clienterouter.get('/register', viewTutorRegister)



Clienterouter.get('/crud', indexViewCliente)

//CRUD TUTOR
Clienterouter.post('/register', createCliente)
Clienterouter.get('/crud/:id_cliente', getCliente)
Clienterouter.put('/crud/:id_cliente', updateCliente)
Clienterouter.delete('/crud/:id_cliente', deleteCliente)


export default Clienterouter;
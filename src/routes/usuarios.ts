import { Router } from "express";
import { getUsuarios,getUsuario, postUsuario, deleteUsuario } from "../controllers/usuario";


const router=Router();

router.get('/',getUsuarios);
router.get('/:id',getUsuario);
router.post('/',postUsuario);
router.put('/:id', getUsuarios);
router.delete('/:id',deleteUsuario);

export default router;
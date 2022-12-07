import { Router } from "express";
import {indexViewProducto, readProducto,createProducto, updateProducto, deleteProducto, indexMenu} from "../controllers/producto";

const Productorouter=Router();

/* GET home page(editar_usuarios ejs)*/
Productorouter.get("/view", indexViewProducto);
Productorouter.get("/",readProducto);
Productorouter.post("/register",createProducto);
Productorouter.post("/update/:id_Producto",updateProducto);
Productorouter.delete("/:id_Producto",deleteProducto);
//Productorouter.get("/view", indexMenu);






export default Productorouter;
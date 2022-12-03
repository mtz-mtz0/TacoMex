import { Router } from "express";
import {indexViewProducto, readProducto,createProducto,updateProducto,deleteProducto  } from "../controllers/producto";

const Productorouter=Router();

/* GET home page(editar_usuarios ejs)*/
Productorouter.get("/view", indexViewProducto);
Productorouter.get("/",readProducto);
Productorouter.post("/",createProducto);
Productorouter.post("/update/:id_Producto",updateProducto);
Productorouter.delete("/:id_Producto",deleteProducto);

export default Productorouter;
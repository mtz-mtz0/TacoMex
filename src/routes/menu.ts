import { Router } from "express";
import {indexMenu} from "../controllers/menu";

const MenuRouter=Router();

/* GET home page(editar_usuarios ejs)*/
//Productorouter.get("/view", indexViewProducto);
//Productorouter.get("/view", indexViewProducto);

//Productorouter.get("/",readProducto);
//Productorouter.post("/",createProducto);
//Productorouter.post("/update/:id_Producto",updateProducto);
//Productorouter.delete("/:id_Producto",deleteProducto);


MenuRouter.get("/view", indexMenu);

//MenuRouter.get("/",readMenu);




export default MenuRouter;
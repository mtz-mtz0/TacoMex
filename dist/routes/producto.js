"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = require("../controllers/producto");
const express_1 = require("express");
const Productorouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
Productorouter.get("/view", producto_1.indexViewProducto);
Productorouter.get("/", producto_1.readProducto);
Productorouter.post("/register", producto_1.createProducto);
Productorouter.post("/update/:id_Producto", producto_1.updateProducto);
Productorouter.delete("/:id_Producto", producto_1.deleteProducto);
//Productorouter.get("/view", indexMenu);
exports.default = Productorouter;

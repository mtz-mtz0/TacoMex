"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducto = exports.updateProducto = exports.createProducto = exports.readProducto = exports.indexMenu = exports.indexViewProducto = void 0;
const productos_1 = require("../models/productos");
/*/declare module 'express-session'{
  export interface SessionData{
      admin:String[]
  }
}/*

/* GET home page(editar_usuarios ejs)*/
function indexViewProducto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.render('../views/productos/producto-view');
    });
}
exports.indexViewProducto = indexViewProducto;
//export async function indexMenu(req: Request, res: Response) {
//return res.render('../views/Principal/menu',{title: 'Menu' });}
function indexMenu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const records= await TablaProducto.findAll(
            const records = yield productos_1.TablaProducto.findAll({ raw: true });
            //{where: { descripcion_pro: 'adrian'  }    }  
            const data = { httpCode: 0, message: "", records };
            res.render("../views/Principal/menu", data);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador plox'
            });
        }
    });
}
exports.indexMenu = indexMenu;
//muestra todos los usuarios
//localhost:3000/api/producto 
function readProducto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: where } = req;
            const productos = yield productos_1.TablaProducto.findAll({
                attributes: [
                    "id_Producto", "nombre_pro", "descripcion_pro", "id_fotografia_pro",
                    "precio_pro", "categoria_pro", "estatus_pro"
                ],
                raw: true,
                where
            });
            res.status(200).json(productos);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.readProducto = readProducto;
//insertar Producto
function createProducto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const productoResponse = yield productos_1.TablaProducto.create(body, { raw: true });
            // res.status(201).json();
            indexViewProducto(req, res);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createProducto = createProducto;
//actualizar producto
//localhost:3000/api/direccion/update/1
function updateProducto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const { id_Producto } = req.params;
            const entity = yield productos_1.TablaProducto.findByPk(id_Producto);
            yield (entity === null || entity === void 0 ? void 0 : entity.update(body));
            res.status(201).json(entity === null || entity === void 0 ? void 0 : entity.toJSON());
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.updateProducto = updateProducto;
//eliminar registros: Delete
//localhost:3000/api/producto/2
function deleteProducto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_Producto } = req.params;
            const entity = yield productos_1.TablaProducto.findByPk(id_Producto);
            yield (entity === null || entity === void 0 ? void 0 : entity.destroy());
            res.status(204).json({ ok: "" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.deleteProducto = deleteProducto;

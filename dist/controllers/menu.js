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
exports.indexMenu = exports.indexViewProducto = void 0;
const productos_1 = require("../models/productos");
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
            const productos = yield productos_1.TablaProducto.findAll({ raw: true });
            //{where: { descripcion_pro: 'adrian'  }    }  
            const data = { httpCode: 0, message: "", productos };
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

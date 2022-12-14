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
exports.deletePedido = exports.updatePedido = exports.createPedido = exports.readPedido = exports.indexViewPedido = void 0;
const pedido_1 = require("../models/pedido");
/* GET home page(editar_usuarios ejs)*/
function indexViewPedido(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.render('../views/pedido/pedido-view');
    });
}
exports.indexViewPedido = indexViewPedido;
//muestra todos los usuarios
//localhost:3000/api/producto 
function readPedido(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: where } = req;
            const pedido = yield pedido_1.PedidoModel.findAll({
                attributes: [
                    "num_pedido", "fecha_ped", "cantidadProd_ped", "montoTotal_ped", "estatus_ped",
                    "id_local_ped", "Repartidor_id_repartidor", "id_cliente_ped"
                ],
                raw: true,
                where
            });
            res.status(200).json(pedido);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.readPedido = readPedido;
//insertar Producto
function createPedido(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const pedidoresponse = yield pedido_1.PedidoModel.create(body, { raw: true });
            // res.status(201).json();
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createPedido = createPedido;
//actualizar producto
//localhost:3000/api/direccion/update/1
function updatePedido(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const { num_pedido } = req.params;
            const entity = yield pedido_1.PedidoModel.findByPk(num_pedido);
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
exports.updatePedido = updatePedido;
//eliminar registros: Delete
//localhost:3000/api/producto/2
function deletePedido(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { num_pedido } = req.params;
            const entity = yield pedido_1.PedidoModel.findByPk(num_pedido);
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
exports.deletePedido = deletePedido;
//# sourceMappingURL=pedido.js.map
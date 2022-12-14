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
exports.deleteRepartidor = exports.updateRepartidor = exports.createRepartidor = exports.readRepartidor = exports.indexViewRepartidor = void 0;
const repartidor_1 = require("../models/repartidor");
/* GET home page(editar_usuarios ejs)*/
function indexViewRepartidor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.render('../views/repartidor/repartidor-view');
    });
}
exports.indexViewRepartidor = indexViewRepartidor;
//muestra todos los usuarios
//localhost:3000/api/repartidor 
function readRepartidor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: where } = req;
            const direcciones = yield repartidor_1.RepartidorModel.findAll({
                attributes: [
                    "id_repartidor", "nombre_rep", "apellidoP_rep", "apellidoM_rep",
                    "id_fotografia_rep", "id_usuario_rep", "estatus_rep"
                ],
                raw: true,
                where
            });
            res.status(200).json(direcciones);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.readRepartidor = readRepartidor;
//insertar repartidor 
//post
function createRepartidor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const repartidorResponse = yield repartidor_1.RepartidorModel.create(body, { raw: true });
            indexViewRepartidor(req, res);
            //res.status(201).json(repartidorResponse);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createRepartidor = createRepartidor;
//actualizar repartidor
//localhost:3000/api/repartidor/update/1
function updateRepartidor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_repartidor } = req.params;
            const { body } = req;
            const entity = yield repartidor_1.RepartidorModel.findByPk(id_repartidor);
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
exports.updateRepartidor = updateRepartidor;
//eliminar registros: Delete
//localhost:3000/api/repartidor/2
function deleteRepartidor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_repartidor } = req.params;
            const entity = yield repartidor_1.RepartidorModel.findByPk(id_repartidor);
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
exports.deleteRepartidor = deleteRepartidor;
//# sourceMappingURL=repartidor.js.map
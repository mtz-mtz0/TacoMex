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
exports.deleteDireccion = exports.updateDireccion = exports.createDireccion = exports.readDireccion = exports.indexViewDireccion = void 0;
const direccion_1 = require("../models/direccion");
/* GET home page(editar_usuarios ejs)*/
function indexViewDireccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.render('../views/direccion/direccion-view');
    });
}
exports.indexViewDireccion = indexViewDireccion;
//muestra todos los usuarios
//localhost:3000/api/direccion 
function readDireccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: where } = req;
            const direcciones = yield direccion_1.DireccionModel.findAll({
                attributes: [
                    "id_Direccion", "codigoPostal_dir", "estado_dir", "colonia_dir",
                    "calle_dir", "numExterior_dir", "numInterior_dir"
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
exports.readDireccion = readDireccion;
//insertar direccion 
//post
function createDireccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const direccionResponse = yield direccion_1.DireccionModel.create(body, { raw: true });
            //  res.status(201).json(direccionResponse);
            res.render('index', { title: 'TacoMex' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createDireccion = createDireccion;
//actualizar direccion
//localhost:3000/api/direccion/update/1
function updateDireccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_Direccion } = req.params;
            const { body } = req;
            const entity = yield direccion_1.DireccionModel.findByPk(id_Direccion);
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
exports.updateDireccion = updateDireccion;
//eliminar registros: Delete
//localhost:3000/api/direccion/2
function deleteDireccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_Direccion } = req.params;
            const entity = yield direccion_1.DireccionModel.findByPk(id_Direccion);
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
exports.deleteDireccion = deleteDireccion;

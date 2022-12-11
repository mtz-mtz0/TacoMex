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
exports.deleteUsuario = exports.updateUsuario = exports.createUsuarios = exports.readUsuario = exports.indexViewUsuario = void 0;
const usuario_1 = require("../models/usuario");
/* GET home page(editar_usuarios ejs)*/
function indexViewUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.render('../views/usuario/usuario-view');
    });
}
exports.indexViewUsuario = indexViewUsuario;
//muestra todos los usuarios
//localhost:3000/api/direccion 
function readUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { query: where } = req;
            const usuarios = yield usuario_1.UsuarioModel.findAll({
                attributes: [
                    "id_usuario", "usuario_us", "tipo_us"
                ],
                raw: true,
                where
            });
            res.status(200).json(usuarios);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.readUsuario = readUsuario;
//insertar direccion 
//post
function createUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body } = req;
            const usuarioResponse = yield usuario_1.UsuarioModel.create(body, { raw: true });
            indexViewUsuario(req, res);
            // res.status(201).json(usuarioResponse);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador'
            });
        }
    });
}
exports.createUsuarios = createUsuarios;
//actualizar direccion
//localhost:3000/api/direccion/update/1
function updateUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_usuario } = req.params;
            const { body } = req;
            const entity = yield usuario_1.UsuarioModel.findByPk(id_usuario);
            yield (entity === null || entity === void 0 ? void 0 : entity.update(body));
            res.status(201).json(entity === null || entity === void 0 ? void 0 : entity.toJSON());
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'habla con el administrador, no pudimos actualizarlo'
            });
        }
    });
}
exports.updateUsuario = updateUsuario;
//eliminar registros: Delete
//localhost:3000/api/direccion/2
function deleteUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id_usuario } = req.params;
            const entity = yield usuario_1.UsuarioModel.findByPk(id_usuario);
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
exports.deleteUsuario = deleteUsuario;

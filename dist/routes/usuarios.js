"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const Usuariorouter = (0, express_1.Router)();
/* GET home page(editar_usuarios ejs)*/
Usuariorouter.get("/view", usuario_1.indexViewUsuario);
Usuariorouter.get("/", usuario_1.readUsuario);
Usuariorouter.post("/update/:id_usuario", usuario_1.updateUsuario);
Usuariorouter.delete("/:id_usuario", usuario_1.deleteUsuario);
Usuariorouter.post("/register", usuario_1.createUsuarios);
exports.default = Usuariorouter;
//# sourceMappingURL=usuarios.js.map
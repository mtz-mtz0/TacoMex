"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { getUsuario, getUsuarios } from "../controllers/usuario";
const router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'TacoMex' });
});
/*---------------------------------Usuario-----------------------------------*/
/* GET home page(iniciar sesion.ejs)*/
router.get('/views/Usuario/inicio_sesion', function (req, res, next) {
    res.render('../views/Usuario/inicio_sesion', { title: 'Inicio de sesión' });
});
/* GET home page(registro.ejs)*/
router.get('/api/cliente/view', function (req, res, next) {
    res.render('../views/cliente/cliente', { title: 'Registro de usuario' });
});
/* GET home page(registro_direccion.ejs)*/
router.get('/views/Usuario/registro_direccion', function (req, res, next) {
    res.render('../views/Usuario/registro_direccion', { title: 'Registro de dirección' });
});
/* GET home page(informacion.ejs)*/
router.get('/views/EditarDatos/informacion', function (req, res, next) {
    res.render('../views/EditarDatos/informacion', { title: 'Informacion' });
});
/* GET home page(editarDatos.ejs)*/
router.get('/views/editarDatos/editarDatos', function (req, res, next) {
    res.render('../views/editarDatos/editarDatos', { title: 'Editar datos' });
});
/* GET home page(editar_direccion.ejs)*/
router.get('/views/EditarDatos/editarDireccion', function (req, res, next) {
    res.render('../views/EditarDatos/editarDireccion', { title: 'Inicio de sesión' });
});
/*---------------------------------PRINCIPAL-----------------------------------*/
/* GET home page(sobreNosotros.ejs)*/
router.get('/views/Principal/sobreNosotros', function (req, res, next) {
    res.render('../views/Principal/sobreNosotros', { title: 'Sobre nosotros' });
});
/* GET home page(menu.ejs)*/
router.get('/views/Principal/menu', function (req, res, next) {
    res.render('../views/Principal/menu', { title: 'Menu' });
});
/*---------------------------------Administrador-----------------------------------*/
/* GET home page(Productos.ejs)*/
router.get('/views/Administrador/Productos', function (req, res, next) {
    res.render('../views/Administrador/Productos', { title: 'Productos' });
});
/* GET home page(Productos.ejs)*/
router.get('/views/Administrador/pedidos', function (req, res, next) {
    res.render('../views/Administrador/pedidos', { title: 'Pedidos' });
});
/*---------------------------------Repartidor-----------------------------------*/
/* GET home page(Productos.ejs)*/
router.get('/views/repartidor/entregas', function (req, res, next) {
    res.render('../views/repartidor/entregas', { title: 'Entregas' });
});
exports.default = router;

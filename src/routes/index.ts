import { Router, Request, Response } from "express";

const router = Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'TacoMex' });
});

/* GET home page(registro.ejs)*/
router.get('/views/Usuario/registro', function(req, res, next) {
  res.render('../views/Usuario/registro', { title: 'Registro de usuario' });
}); 


/* GET home page(sobreNosotros.ejs)*/
router.get('/views/Principal/sobreNosotros', function(req, res, next) {
  res.render('../views/Principal/sobreNosotros', { title: 'Sobre nosotros' });
});

/* GET home page(menu.ejs)*/
router.get('/views/Principal/menu', function(req, res, next) {
  res.render('../views/Principal/menu', { title: 'Menu' });
});

/* GET home page(Productos.ejs)*/
router.get('/views/Administrador/Productos', function(req, res, next) {
  res.render('../views/Administrador/Productos', { title: 'Productos' });
});

/* GET home page(Productos.ejs)*/
router.get('/views/Administrador/pedidos', function(req, res, next) {
  res.render('../views/Administrador/pedidos', { title: 'Pedidos' });
});

/* GET home page(registro_direccion.ejs)*/
router.get('/views/Usuario/registro_direccion', function(req, res, next) {
  res.render('../views/Usuario/registro_direccion', { title: 'Registro de dirección' });
}); 

/* GET home page(registro_direccion.ejs)*/
router.get('/views/Usuario/inicio_sesion', function(req, res, next) {
  res.render('../views/Usuario/inicio_sesion', { title: 'Inicio de sesión' });
}); 

/* GET home page(registro_direccion.ejs)*/
router.get('/views/EditarDatos/editarDireccion', function(req, res, next) {
  res.render('../views/EditarDatos/editarDireccion', { title: 'Inicio de sesión' });
});


export default router;
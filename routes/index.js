var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController");

/* GET home page(index.ejs)*/
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



/* GET home page(registro_direccion.ejs)*/
router.get('/views/Usuario/registro_direccion', function(req, res, next) {
  res.render('../views/Usuario/registro_direccion', { title: 'Registro de dirección' });
}); 

/* GET home page(registro_direccion.ejs)*/
router.get('/views/Usuario/inicio_sesion', function(req, res, next) {
  res.render('../views/Usuario/inicio_sesion', { title: 'Inicio de sesión' });
}); 


router.get('/views/Administrador/Productos', productosController.productos);

module.exports = router;
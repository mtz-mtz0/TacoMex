var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController");

/* GET home page(index.ejs)*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TacoMex' });
});

/* GET home page(sobreNosotros.ejs)*/
router.get('/views/Principal/sobreNosotros', function(req, res, next) {
  res.render('../views/Principal/sobreNosotros', { title: 'Sobre nosotros' });
});

/* GET home page(menu.ejs)*/
router.get('/views/Principal/menu', function(req, res, next) {
  res.render('../views/Principal/menu', { title: 'Menu' });
});

router.get('/views/Administrador/Productos', productosController.productos);

module.exports = router;
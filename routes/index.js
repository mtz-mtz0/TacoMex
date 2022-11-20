var express = require('express');
var router = express.Router();

/* GET home page(index.ejs)*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TacoMex' });
});

/* GET home page(sobreNosotros.ejs)*/
router.get('/views/Principal/sobreNosotros', function(req, res, next) {
  res.render('../views/Principal/sobreNosotros', { title: 'Sobre nosotros' });
});

module.exports = router;

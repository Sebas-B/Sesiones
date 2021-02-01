var express = require('express');
var router = express.Router();

var sesion; //Varialble para el manejo de sesiones

/* GET home page. */
router.get('/', function(req, res, next) {
  sesion = req.session;

  if(sesion.email) {
     res.render('welcome', { nombre: sesion.email });
  }
  res.render('login'); //Redericciona la bista login
});

router.post('/handle', function(req, res, next) {
  sesion = req.session;

  sesion.email = req.body.email; //Establece valor de la sesion
  res.render('welcome', { nombre: sesion.email });
});

router.get('/logout', (req, res) => {

    req.session.destroy((err) => {
      if (err) {
	return console.log(err);
      }
      res.redirect('/login'); //redirecciona al login
    });

});

module.exports = router;

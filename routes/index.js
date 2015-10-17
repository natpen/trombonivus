var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trombonivus - An Arizona holiday trombone choir concert for the rest of us' });
});

module.exports = router;

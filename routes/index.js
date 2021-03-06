var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function (req, res, next) {
  res.render('index', { title: 'Projects' });
});

router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About' });
});
module.exports = router;

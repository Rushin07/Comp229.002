var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/rushin', function (req, res, next) {
  res.send('Welcome My lord!');
});


module.exports = router;

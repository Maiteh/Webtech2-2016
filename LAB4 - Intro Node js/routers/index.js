// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = router;
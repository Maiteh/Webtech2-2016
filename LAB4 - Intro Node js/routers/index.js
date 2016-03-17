/**
* Elke routers file moet de express require hebben 
* anders kent hij express niet.
* express.router is router die alle routes afhandeld.
* nu kan je op var router getten en posten
*/
// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

/**
* Als je een module required moet je deze openstellen naar de buitenwereld 
*
*/
module.exports = router;
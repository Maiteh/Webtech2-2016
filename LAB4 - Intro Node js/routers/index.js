/**
 * Every router file must require express
 * otherwise it wil not recognize express
 * express.router is the router that handles ALL routers
 * NOW you can get and set on var router
 */
// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();

// The root URL, if requested we will render the index
router.get('/', function (req, res) {
  res.send('index', {
      title: 'Hello IMD!',
      urls: ['users', 'messages']
  });
});

/**
 * if your module is required you have to make it available
*/
module.exports = router;
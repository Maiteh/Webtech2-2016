/**
 * Every router file must require express
 * otherwise it wil not recognize express
 * express.router is the router that handles ALL routers
 * NOW you can get and set on var router
 * access the router object, so that we can add routes to it
 * All functionality must be in the controller, routers are only for url's
 */
var controller = require('./../controllers/messages');
var express    = require('express');
var router     = express.Router();

router.get('/', controller.read);
// Go to specific message
router.get('/:id', controller.readOne);
// this route is the same message/message, to make it clean
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;

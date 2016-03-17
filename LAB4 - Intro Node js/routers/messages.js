/**
* Elke routers file moet de express require hebben 
* anders kent hij express niet.
* express.router is router die alle routes afhandeld.
* nu kan je op var router getten en posten
*/
// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();
var controller = require('../controllers/message')


/**
* route get naar message met bepaalde id 
*/
// todo, move this to the controller
router.get('/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	res.send("GET message with :id " + id);
});
/**
* route get naar messages
* dit is gewoon / anders is het messages/messages , nu messages/
*/
router.post('/', controller.create);
/**
* route post messages 
*/
router.get('/', controller.getAll);

module.exports = router;
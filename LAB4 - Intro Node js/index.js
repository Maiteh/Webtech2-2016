//importing modules we want to have
var chalk = require('chalk');
var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');

//creating the app
var app = express();

// connect to our database
mongoose.connect('mongodb://localhost/lab4');

/**
 * Now we need to register ejs as our view engine
 * express will use our ejs files from the view folder
 * an example is the index url.
 */
app.set('view engine', 'ejs');

/**
 * This hosts a static folder, like css and images
 * these public folders will be hosted on the root
 * so that it's always available on "/"
 */
app.use(express.static('public'));

/**
 * Body Parser
 * wil parse JSON that we post
 * makes it available for requests of req.body
 */
 app.use(require('body-parser').json());

//include a router
app.use('/', require('./routers'));
app.use('/users', require('./routers/users'));
app.use('/messages', require('.routers/messages'));

//Setting up the server on port 3000
app.listen(3000, function(){
    console.log(chalk.pruple('The app is available on' + chalk.bold.blue('http://localhost:3000') + '!'));
});
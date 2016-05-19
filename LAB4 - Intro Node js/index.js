//importing modules we want to have
var chalk    = require('chalk');
var express  = require('express');
var ejs      = require('ejs');
var cors     = require('cors');
var mongoose = require('mongoose');

//creating the app
var app      = express();

// connect to our database
mongoose.connect('mongodb://localhost/lab4');

/**
 * Initialize cors
 * with cors you can request over different domains
 * normally only from myapp.com to myapp.com/users...
 * This allows cross origin calls.
 */
app.use(cors());


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


// include our router
app.use('/', require('./routers'));
app.use('/users', require('./routers/user'));
app.use('/messages', require('./routers/message'));

// fire up our server, on port 3000.
app.listen(3000, function () {
  console.log(chalk.blue('Your app is available on ' + chalk.bold.yellow('http://localhost:3000') + '!'));
});


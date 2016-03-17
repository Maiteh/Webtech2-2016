var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeINTRO');

// parse application/json , define this BEFORE adding routes
app.use(bodyParser.json());

/**
* Verwijzen naar routers index.js voor Route naar index.
* Index mag normaal weggelaten worden.
*/
app.use('/', require('./routers/index'));
/**
* Verwijzen naar routers messages.js voor Route naar messages.
* Daarin komen alle links voor de posts en de gets en dergelijke. 
*/
app.use('/messages', require('./routers/messages'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
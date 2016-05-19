var mongoose = require('mongoose');
/**
 * Mongoose brings structure in the webapp
 * sheme's need tot be turned into models
 * they're like Classes
*/



// first, we define a mongoose schema
var Schema = mongoose.Schema;
// add one user to the database
var userSchema = new Schema({
    firstname: String,
    lastname: String,
    family: [{type: Schema.ObjectId, ref: 'User'}]
});
// then we compile this schema into a model
var User = mongoose.model('User', userSchema);

module.exports = User;
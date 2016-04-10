var mongoose = require('mongoose');
/**
 * Mongoose brings structure in the webapp
 * sheme's need tot be turned into models
 * they're like Classes
 */

// first, we define a mongoose schema
var Schema = mongoose.Schema;
// add one user to the database
var messageSchema = new Schema({
    name: String,
    content: String,
    room: String,
    family: [{type: Schema.ObjectId, ref: 'Message'}]
});
// then we compile this schema into a model
var Message = mongoose.model('Message', messageSchema);

module.exports = Message;

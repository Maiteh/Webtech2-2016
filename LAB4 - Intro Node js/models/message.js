var mongoose      = require('mongoose');
/**
 * Mongoose brings structure in the webapp
 * sheme's need tot be turned into models
 * they're like Classes
 */

// first, we define a mongoose schema
var Schema        = mongoose.Schema;
// add one user to the database
var messageSchema = new Schema({
    name:    String,
    content: String,
    room:    String,
}, {
    //transform fro json
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
// We need upercase names thats why we make the virtuals .


// Create Virtual for Name and sync with name
messageSchema.virtual('Name')
    .get(function(){
        // request 'message.Name' give 'message.name'
        return this.name;
    })
    .set(function(Name){
       // change the 'message.Name' save into 'message.name'
       this.set('name', Name);
    });

// Create Virtual for Content and sync with content
messageSchema.virtual('Content')
    .get(function(){
        // request 'message.Content' give 'message.contetn'
        return this.content;
    })
    .set(function(Content){
        // change the 'message.Contetn' save into 'message.Contetn'
        this.set('content', Content);
    });

// Create Virtual for Room and sync with room
messageSchema.virtual('Room')
    .get(function(){
        // request 'message.Room' give 'message.room'
        return this.room;
    })
    .set(function(Room){
        // change the 'message.Room' save into 'message.room'
        this.set('room', Room);
    });

// Create Virtual for MessageId and sync with _id
messageSchema.virtual('MessageId')
    .get(function(){
        // request 'message.messageId' give  'message._id'
        return this._id;
    });

// Create Virtual for Timestamp and sync with _id
messageSchema.virtual('Timestamp')
    .get(function(){
        // request 'message.Timestamp' give  'message._id' rep timestamp
        return this._id.getTimestamp();
    });

// To not get all in output, clean it up in json transormer
messageSchema.options.toJSON = {
    virtuals: true,
    transform: function(document, returnedObject, options) {
        // 'name' <> 'Name'
        delete returnedObject.name;
        // 'content' <> 'Content'
        delete returnedObject.content;
        // 'room' <> 'Room'
        delete returnedObject.room;
        // '_id' <> 'MessageId'
        delete returnedObject._id;
        // 'id' <> 'MessageId'
        delete returnedObject.id;
        // remove  '__v' internal variable
        delete returnedObject.__v;

        return returnedObject;
    }
};

// then we compile this schema into a model
var Message = mongoose.model('Message', messageSchema);

module.exports = Message;

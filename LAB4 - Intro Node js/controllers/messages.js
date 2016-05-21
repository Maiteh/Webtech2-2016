//A modern JS library.
var _ = require('lodash');
var Message = require('./../models/message');

// get all messages
function getAll(req, res, next) {

    Message
        .find({})
        .exec(function onMessagesFound(err, messages) {
            //Now return the a clean json to users instead of sending everything
            //models/message.js for json
            var transform = _.map(messages, function (message) {
                return message.toJSON();
            });
            res.send(transform);
        });
}
module.exports.read = getAll;

// get one message by id (req.params.id)
function getOne(req, res, next) {
    Message.findOne({_id: req.params.id}, function onMessageFound(err, message) {
        if (!message) {
            res.status(404).send("Message not found");
        }

        // we return the json version with cleaned up model to the user
        res.send(message.toJSON());
    });
}
module.exports.readOne = getOne;

// create a new message (req.body)
function add(req, res, next) {
    var newMessage = new Message(req.body);

    newMessage.save(function onMessageSaved(err, message) {
        // we return the json version with cleaned up model to the user
        res.send(message.toJSON());
    });
}
module.exports.create = add;

// update a message (req.body)
function update(req, res, next) {
    Message.findOneAndUpdate({_id: req.params.id}, function onMessageFound(err, message) {
        if (!message) {
            return res.status(404).send("Message not found");
        }
    });
}
module.exports.update = update;

// remove one message by id (req.params.id)
function remove(req, res, next) {
    Message.findOneAndRemove({_id: req.params.id}, function onMessageFound(err, message) {
        res.status(204).send();
    });
}
module.exports.remove = remove;


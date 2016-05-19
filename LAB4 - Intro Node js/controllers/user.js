//creates short url friendly id.
var shortid = require('shortid');
//A modern JS library.
var _ = require('lodash');
var User    = require('./../models/user');

/**
 * A static users
  var users = [
 {
     id: shortid.generate(),
     firstname: 'Maiteh',
     lastname: 'Mertens',
 },
 {
     id: shortid.generate(),
     firstname: 'Giovanni',
     lastname: 'Van Bael'
 }
 ];
 * @type {*[]}
 */

// get all users
function getAll(req, res, next) {
  User
    .find({})
    .populate('family')
    .exec(function onUsersFound(err, users) {
      //Now return the a clean json to users instead of sending everything
      //models/user.js for json
      var transform = _.map(messages, function (user) {
        return user.toJSON();
      });
      res.send(transform);
    });
}
module.exports.read = getAll;

// get one user by id (req.params.id)
function getOne(req, res, next) {
  User.findOne({_id: req.params.id}, function onUserFound(err, user) {
    if(!user) {
      res.status(404).send("User not found");
    }

    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.readOne = getOne;

// create a new user (req.body)
function add(req, res, next) {
  var newUser = new User(req.body);

  newUser.save(function onUserSaved(err, user) {
    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.create = add;

// update a user (req.body)
function update(req, res, next) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, function onUserUpdated(err, user) {
    if(!user) {
      res.status(404).send("User not found");
    }
    // we return the json version with cleaned up model of the user
    res.send(user.toJSON());
  });
}
module.exports.update = update;

// remove one user by id (req.params.id)
function remove(req, res, next) {
  User.findOneAndRemove({_id: req.params.id}, function onUserFound(err, user) {
    res.status(204).send();
  });
}
module.exports.remove = remove;


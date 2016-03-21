//creates short url friendly id.
var shortid = require('shortid');
//A modern JS library.
var _ = require('lodash');

//A static user
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

/**
 * get all users
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    res.send(users);
}
module.exports.read = getAll;

/**
 * get user by id (req.params.id)
 * @param req
 * @param res
 * @param next
 */
function getOne(req, res, next) {
    res.send(_.find(users, {id: req.params.id}));
}
module.exports.readOne = getOne;

/**
 * create a new user (req.body)
 * @param req
 * @param res
 * @param next
 */
function add(req, res, next) {
    var newUser = req.body;
    newUser.id = shortid.generate();
    users.push(newUser);

    res.send(newUser);
}
module.exports.create = add;

/**
 * update a user (req.body)
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    var user = _.find(users, {id: req.params.id});
    if(!user) {
        res.status(404).send("User not found");
    }

    user = _.extend(user, req.body);

    res.send(user);
}
module.exports.update = update;

/**
 * remove one user by id (req.params.id)
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    _.remove(users, {id: req.params.id});
    res.status(204).send();
}
module.exports.remove = remove;
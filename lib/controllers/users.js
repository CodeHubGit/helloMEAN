'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.save(function(err) {
    if (err) return res.json(400, err);
  });

  return res.json(newUser);
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};

exports.listAll = function(req, res){
    User.find()
        .exec(function(err, users){
            res.send(users);
    });
};

exports.updateUserProperty = function(req, res){
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        console.log(user);

        /*user.save(function(err) {
            if (err) return res.send(400);

            return res.json(user);
        });*/
    });

    return res.send(200);

};
'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
    Clear yer data
 */

// Clear old users
User.find({}).remove(function() {

});

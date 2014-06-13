'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  age: Number
});

/**
 * Virtuals
 */

// Basic info to identify the current authenticated user in the app
UserSchema
  .virtual('userInfo')
  .get(function() {
    return {
      'name': this.name,
      'age': this.age
    };
  });

module.exports = mongoose.model('User', UserSchema);

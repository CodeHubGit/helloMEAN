'use strict';

angular.module('helloMeanApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

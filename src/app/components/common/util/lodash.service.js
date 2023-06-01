'use strict';

angular
  .module('yeomanAngular')
  .factory('_', function ($window) {
      return $window._;
    }
  );

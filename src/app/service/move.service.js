(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .service('MoveService', function (AuthService, $state) {
      var service = this;
      service.move = move;

      function move() {
        if (AuthService.isAuth()) {
          $state.go('dashboard');
        } else {
          $state.go('auth');
        }
      }
    });

})();

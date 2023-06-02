(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController($scope, $log, AuthService, MoveService) {
    var vm = this;
    vm.username = '';
    vm.password = '';
    vm.login = login;

    $scope.$watch(function () {
      return vm.username;
    }, function () {
      $log.info(vm.username + " : " + vm.password);
    });

    $scope.$watch(function () {
      return vm.password;
    }, function () {
      $log.info(vm.username + " : " + vm.password);
    });

    function login() {
      if (AuthService.login(vm.username, vm.password)) {
        MoveService.move();
      } else {
        alert('Auth fail');
      }
    }

  }

})();

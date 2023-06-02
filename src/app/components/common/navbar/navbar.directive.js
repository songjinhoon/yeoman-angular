(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/common/navbar/views/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $interval, $scope, $location, MoveService, AuthService) {
      var vm = this;
      vm.state = {
        time: Date.now(),
        type: (function () {
          if ($location.$$path === '/dashboard') {
            return 'dashboard';
          } else {
            return 'todo';
          }
        })()
      }

      $interval(function () {
        vm.state.time = Date.now();
      }, 1000);

      $scope.navChange = function (param) {
        vm.state.type = param;
      }

      $scope.logout = function () {
        AuthService.logout();
        MoveService.move();
      }

    }
  }

})();

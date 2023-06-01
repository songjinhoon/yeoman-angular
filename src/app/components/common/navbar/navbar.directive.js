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
    function NavbarController(moment, $interval, $scope, $location, $log) {
      var vm = this;
      vm.state = {
        time: Date.now(),
        type: (function () {
          if ($location.$$path === '/') {
            return 'home';
          } else if ($location.$$path === '/dashboard') {
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

      $scope.test = function () {
        alert('이거222');
      }
    }
  }

})();

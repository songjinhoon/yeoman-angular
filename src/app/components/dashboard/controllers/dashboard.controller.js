(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1684818455476;
  }
})();

(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(TodoService, _) {
    var vm = this;
    initialize();

    function initialize() {
      var datas = TodoService.getAll();
      vm.todos = _.filter(datas, {'userId': '10000'});
      vm.waitTodos = _.filter(datas, {'userId': '10000', 'status': 'WAIT'});
      vm.startTodos = _.filter(datas, {'userId': '10000', 'status': 'START'});
      vm.completeTodos = _.filter(datas, {'userId': '10000', 'status': 'COMPLETE'});
    }

  }
})();

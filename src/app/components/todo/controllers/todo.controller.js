(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .controller('TodoController', TodoController);

  function TodoController(TodoModel, $scope, $log, _) {
    var vm = this;
    vm.todos = TodoModel.getAll();
    vm.todo = {};
    vm.isSelectTodo = false;
    vm.selectTodo = selectTodo;
    vm.updateTodo = updateTodo;

    vm.modeType = {
      LIST: 'LIST',
      CREATE: 'CREATE',
      READ: 'READ',
      UPDATE: 'UPDATE'
    };

    $scope.$watch(function () {
      return vm.todo;
    }, function (nv) {
      if (_.isEmpty(nv)) {
        vm.isSelectTodo = false;
      } else {
        vm.isSelectTodo = true;
      }
    });

    function selectTodo(id) {
      if (id == null) {
        vm.todo = {};
      } else {
        vm.todo = TodoModel.get(id);
      }
    }

    function updateTodo(todo) {
      var value = TodoModel.update(todo);
      alert('UPDATE SUCCESS!');
      for (var i = 0; i < vm.todos.length; i++) {
        if (vm.todos[i].id === value.id) {
          vm.todos[i].id = value;
        }
      }
    }

  }

})();

(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .service('TodoService', function (moment) {
      var service = this;
      service.getAll = getAll;
      service.get = get;
      service.update = update;

      function getAll() {
        return todos;
      }

      function get(id) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].id === id) {
            return todos[i];
          }
        }
      }

      function update(todo) {
        alert('API SUCCESS!');
        todo.updateDate = moment().format('YYYY-MM-DD HH:mm:ss');
        return todo;
      }

      var todos = [];
      for (var i = 0; i < 100; i++) {
        var statusType = ['WAIT', 'START', 'COMPLETE'];
        todos.push({
          id: i,
          title: '제목' + i,
          content: '내용',
          status: statusType[Math.floor(Math.random() * 3)],
          updateDate: moment().format('YYYY-MM-DD HH:mm:ss'),
          userId: i < 50 ? '10000' : '10001'
        });
      }

    });

})();

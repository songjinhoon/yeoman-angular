(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .state('auth', {
        url: '/auth',
        templateUrl: 'app/components/auth/views/main.html',
        controller: 'AuthController',
        controllerAs: 'authCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/views/main.html',
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl'
      })
      .state('todo', {
        url: '/todo',
        templateUrl: 'app/components/todo/views/main.html',
        controller: 'TodoController',
        controllerAs: 'todoCtrl'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();

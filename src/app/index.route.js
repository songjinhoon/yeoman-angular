(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/views/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();

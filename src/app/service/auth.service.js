(function () {
  'use strict';

  angular
    .module('yeomanAngular')
    .service('AuthService', function ($window, _) {
      var service = this;
      service.isAuth = isAuth;
      service.login = login;
      service.logout = logout;

      function isAuth() {
        return !_.isEmpty($window.sessionStorage.getItem('user'));
      }

      function login(username, password) {
        if (username === 'admin' && password === 'admin') {
          $window.sessionStorage.setItem('user', {
            id: '10000',
            username: username,
            password: password
          });
          return true;
        }
        return false;
      }

      function logout() {
        $window.sessionStorage.clear();
      }

    });

})();

(function() {
  'use strict';

  angular
    .module('yeomanAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

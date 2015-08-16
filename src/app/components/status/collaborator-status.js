'use strict';

angular.module('microInfraView')
  .directive('collaboratorStatus', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/status/collaborator-status.html',
      scope: {
        'status': '='
      }
    }
  });

"use strict";

angular.module('microInfraView')
  .controller('MainCtrl', function ($scope, $log, Restangular) {
    Restangular.all('collaborators').one('all').get().then( function(collaborators) {
      $scope.current = {collaborator:{}};
      $scope.allCollaborators = collaborators.plain();
      $scope.parsedResponse = parseResponse($scope.allCollaborators);
      draw($scope.parsedResponse);
    });
  });

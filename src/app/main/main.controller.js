"use strict";

angular.module('collaborators')
  .controller('MainCtrl', function ($scope, $log, Restangular) {
    Restangular.one('all').get().then( function(collaborators) {
      $scope.current = {collaborator:{}};
      $scope.allCollaborators = collaborators.plain();
      $scope.parsedResponse = parseResponse($scope.allCollaborators);
      draw($scope.parsedResponse);
    });


  });

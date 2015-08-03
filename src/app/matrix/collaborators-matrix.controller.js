"use strict";

angular.module('collaborators')
  .controller('CollaboratorsMatrixCtrl', function ($scope, $log, Restangular) {
    Restangular.one('all').get().then(function (collaborators) {
      $scope.current = {collaborator: {}};

      $scope.allCollaborators = collaborators.plain();
      drawRadial(parseResponse($scope.allCollaborators));

    });
  });

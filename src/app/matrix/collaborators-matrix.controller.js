"use strict";

angular.module('microInfraView')
  .controller('CollaboratorsMatrixCtrl', function ($scope, $log, Restangular) {
    Restangular.one('all').get().then(function (collaborators) {
      $scope.current = {collaborator: {}};

      $scope.allCollaborators = collaborators.plain();
      drawMatrix(parseResponse($scope.allCollaborators));
    });
  });

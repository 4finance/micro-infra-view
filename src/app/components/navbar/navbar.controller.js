'use strict';

angular.module('collaborators')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.state = $state.current.name;
  });

'use strict';

angular.module('microInfraView')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.state = $state.current.name;
  });

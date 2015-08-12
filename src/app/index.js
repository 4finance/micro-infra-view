'use strict';

angular.module('microInfraView', ['restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('matrix', {
        url: '/matrix',
        templateUrl: 'app/matrix/collaborators.html',
        controller: 'CollaboratorsMatrixCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

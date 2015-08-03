'use strict';

angular.module('collaborators', ['restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('matrix', {
        url: '/matrix',
        templateUrl: 'app/main/main.html',
        controller: 'CollaboratorsMatrixCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

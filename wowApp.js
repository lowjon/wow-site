
angular.module('wowApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        controller: 'homeCtrl',
        url: '/',
        templateUrl: './src/home/home.html'
      })

  })

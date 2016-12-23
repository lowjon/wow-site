
angular.module('wowApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        controller: 'homeCtrl',
        url: '/',
        templateUrl: './src/home/home.html'
      })
      .state('menu', {
        controller: 'menuCtrl',
        url: '/menu',
        templateUrl: './src/menu/menu.html'
      })
      .state('contact', {
        controller: 'contactCtrl',
        url: '/contact',
        templateUrl: './src/contact/contact.html'
      })


  })

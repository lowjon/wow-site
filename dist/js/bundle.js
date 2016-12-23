'use strict';

angular.module('wowApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    controller: 'homeCtrl',
    url: '/',
    templateUrl: './src/home/home.html'
  });
});
'use strict';

angular.module('wowApp').controller('homeCtrl', function ($scope) {
  $scope.homeViewIsBroken = 'Home view is up and running';

  $scope.hamClick = function () {};
});
"use strict";
'use strict';

angular.module('wowApp').controller('mainCtrl', function ($scope) {

  $('.nav-left').on('click', function () {
    $('.popout-menu-hide').toggleClass('popout-menu-show', 500, "swing");
  });
});
//# sourceMappingURL=bundle.js.map

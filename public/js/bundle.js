'use strict';

angular.module('wowApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    controller: 'homeCtrl',
    url: '/',
    templateUrl: './src/home/home.html'
  }).state('menu', {
    controller: 'menuCtrl',
    url: '/menu',
    templateUrl: './src/menu/menu.html'
  }).state('contact', {
    controller: 'contactCtrl',
    url: '/contact',
    templateUrl: './src/contact/contact.html'
  }).state('about', {
    controller: 'aboutCtrl',
    url: '/about',
    templateUrl: './src/about/about.html'
  });
});
'use strict';

angular.module('wowApp').controller('aboutCtrl', function ($scope) {});
'use strict';

angular.module('wowApp').controller('contactCtrl', function ($scope) {});
'use strict';

angular.module('wowApp').controller('homeCtrl', function ($scope) {
  $('.down-arrow').on('click', function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "swing");
    return false;
  });
});
'use strict';

angular.module('wowApp').controller('mainCtrl', function ($scope) {

  $('.nav-left').on('click', function () {
    $('.popout-menu-hide').toggleClass('popout-menu-show', 500, 'swing');
  });
  $('.mobile-menu').on('click', function () {
    $('.popout-menu-show').removeClass('popout-menu-show', 500, 'swing');
  });
});
'use strict';

angular.module('wowApp').controller('menuCtrl', function ($scope) {});
//# sourceMappingURL=bundle.js.map

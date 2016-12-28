angular.module('wowApp').controller('mainCtrl', function ($scope) {

  $('.nav-left').on('click', function(){
    $('.popout-menu-hide').toggleClass('popout-menu-show', 500, 'swing')
  })
  $('.mobile-menu').on('click', function () {
    $('.popout-menu-show').removeClass('popout-menu-show', 500, 'swing')
  })
  





  })

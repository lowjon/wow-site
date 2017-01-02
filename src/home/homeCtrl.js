angular.module('wowApp')
    .controller('homeCtrl', function($scope) {
      $('.down-arrow').on('click', function () {
        $("html, body").animate({ scrollTop: $(document).height()}, "swing");
        return false;
      })
    })

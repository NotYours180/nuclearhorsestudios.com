define(['jquery'], function($) {
    return function () {
        return {
            link: function(scope, element, attrs) {
                
                scope.activateNav = function(elId, b, c) {
                  $('ul.nav li').removeClass('active');
                  $('#' + elId).addClass('active');
                };
            }
        };
    };
});
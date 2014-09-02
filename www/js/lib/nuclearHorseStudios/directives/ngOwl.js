define(['jquery', 'owl', 'angular'], function($) {
    return ['$window', function ($window) {
        return {
            link: function(scope, element, attrs) {
                var $el = $(element);
                
                $el.owlCarousel({
                  navigation : false, // Show next and prev buttons
                  slideSpeed : 1500,
                  paginationSpeed : 1500,
                  singleItem:true,
                  autoPlay: 8000,
                  rewindSpeed : 100,
                  stopOnHover: true,
                  lazyLoad: true,
                  transitionStyle: 'fade'
                });

                var $col3 = $('div.col3');
                var $contentview = $('#content-view');

                $el.css({ width: ($contentview.width() * 0.6) + 'px' });
                $col3.css({ width: ($contentview.width() * 0.32) + 'px' });

                angular.element($window).on('resize', function () {
                    console.log('resize');

                    $el.css({ width: ($contentview.width() * 0.6) + 'px' });
                    $col3.css({ width: ($contentview.width() * 0.32) + 'px' });
                });
            }
        };
    }];
});
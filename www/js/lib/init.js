(function() {
    require(['jquery', 'angular', 'underscore', 'BlogController'], function($, angular) {
        var nhs_com = angular.module('NuclearHorseStudios_WWW', []);

        nhs_com.config([
            '$routeProvider', 
            function($routeProvider) {
                $routeProvider
                    .when('/blog', {
                        templateUrl: 'partials/blog.html', 
                        controller: BlogController
                    })
                    .otherwise({redirectTo: '/blog'});
            }
        ]);

        console.log('init')
    });
})();
define([
    'jquery', 
    'angular', 
    'ngResource', 
    'ngRoute', 
    'BlogController', 
    'CreationsController',
    'ContactController',
    'underscore'], 
    
    function(   $, 
                angular, 
                ngResource, 
                ngRoute, 
                BlogController, 
                ContactController, 
                CreationsController) 
    {

        var nhs = angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute']);

        nhs.config([
            '$routeProvider', 

            function($routeProvider) {
                $routeProvider
                    .when('/blog', {
                        templateUrl: 'partials/blog.html', 
                        controller: BlogController
                    })
                    .when('/creations', {
                        templateUrl: 'partials/creations.html', 
                        controller: CreationsController
                    })
                    .when('/contact', {
                        templateUrl: 'partials/contact.html', 
                        controller: ContactController
                    })
                    .otherwise({redirectTo: '/blog'});
            }
        ]);
        
        angular.bootstrap(document, ['NuclearHorseStudios']);
    
        return nhs;
    }
);

requirejs.config({
    baseUrl: '../js/lib',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
        ngResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min',
        ngRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min',
        underscore: 'dep/underscore.min',
        BlogController: 'NuclearHorseStudios/BlogController'
    },
    shim: {
        'angular': { 
            deps: ['jquery'],
            exports: 'angular'
        },
        'ngResource': {
            deps: ['angular'],
            exports: 'ngResource'
        },
        'ngRoute': {
            deps: ['angular'],
            exports: 'ngRoute',
        },
        'underscore': {
            exports: '_'
        }
    },
    map: {
        '*': { 
            jquery: 'dep/jqueryPrivate',
        },

        'dep/jqueryPrivate':  { jquery:  'jquery'  }
    }
});

define(['jquery', 'angular', 'ngResource', 'ngRoute', 'BlogController', 'underscore'], 
    
    function($, angular, ngResource, ngRoute, BlogController) {

        var nhs = angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute']);
        
        nhs.directive('parallax', function () {
            return {
              restrict: 'A',
              link: function (scope, elem, attrs) {
                console.log($);
                $(window).on('scroll', function(ev) {
                    ev.preventDefault();
                });
              }
            }
        });

        nhs.config([
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

        nhs.controller('BlogController', BlogController);
        
        angular.bootstrap(document, ['NuclearHorseStudios']);
    
        return nhs;
    }
);
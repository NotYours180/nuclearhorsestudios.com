
requirejs.config({
    baseUrl: '../js/lib',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min',
        ngResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular-resource.min',
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

define(['jquery', 'angular', 'ngResource', 'BlogController', 'underscore'], 
    
    function($, angular, ngResource, BlogController) {

        var nhs = angular.module('NuclearHorseStudios', ['ngResource']);
            
        nhs.controller('BlogController', BlogController);
        
        angular.bootstrap(document, ['NuclearHorseStudios']);
        
        // // nhs_www.config([
        //     '$routeProvider', 
        //     function($routeProvider) {
        //         console.log($routeProvider);
        //         $routeProvider
        //             .when('/blog', {
        //                 templateUrl: 'partials/blog.html', 
        //                 controller: BlogController
        //             })
        //             .otherwise({redirectTo: '/blog'});
        //     }
        // ]);
        
        return nhs;
    }
);
requirejs.config({
    baseUrl: '/js/lib',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
        ngResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min',
        ngRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min',
        underscore: 'dep/underscore.min',
        BlogAddController: 'NuclearHorseStudios/BlogAddController',
        RecentBlogPosts: 'NuclearHorseStudios/RecentBlogPosts',
        CreationsController: 'NuclearHorseStudios/CreationsController',
        ContactController: 'NuclearHorseStudios/ContactController',
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

define([
    'jquery', 
    'angular', 
    'ngResource', 
    'ngRoute', 
    'BlogAddController',
    'RecentBlogPosts',
    'CreationsController',
    'ContactController',
    'underscore'], 
    
    function(   $, 
                angular, 
                ngResource, 
                ngRoute, 
                BlogAddController,
                RecentBlogPosts,
                ContactController, 
                CreationsController) 
    {

        var nhs = angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute']);

        nhs.config([
            '$routeProvider', 

            function($routeProvider) {
                $routeProvider
                    .when('/blog', {
                        templateUrl: 'partials/recent-blog-posts.html', 
                        controller: RecentBlogPosts
                    })
                    .when ('/blog/add', {
                        templateUrl: 'partials/blog-add.html',
                        controller: BlogAddController
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

        nhs.directive('blogPostDate', function() {
            return {
                link: function ($scope, $linkElement, $linkAttributes) {
                        var date            = new Date($scope.post.date * 1000);
                        $scope.post.date   = date.toDateString() + ' - ' + date.toLocaleTimeString();
                }
            };
        });

        
        angular.bootstrap(document, ['NuclearHorseStudios']);
    
        return nhs;
    }
);
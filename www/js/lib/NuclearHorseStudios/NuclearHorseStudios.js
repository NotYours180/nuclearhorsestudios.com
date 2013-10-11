requirejs.config({
    baseUrl: '/js/lib',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
        ngResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min',
        ngRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min',
        jqueryMarkdown: 'dep/jquery.markdown',
        showdown: 'dep/showdown',
        underscore: 'dep/underscore.min',
        BlogAddPostController: 'NuclearHorseStudios/BlogAddPostController',
        BlogDeletePostController: 'NuclearHorseStudios/BlogDeletePostController',
        RecentBlogPosts: 'NuclearHorseStudios/RecentBlogPosts',
        CreationsController: 'NuclearHorseStudios/CreationsController',
        ContactController: 'NuclearHorseStudios/ContactController',
    },
    shim: {
        angular: { 
            deps: ['jquery'],
            exports: 'angular'
        },
        ngResource: {
            deps: ['angular'],
            exports: 'ngResource'
        },
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute',
        },
        showdown: {
            exports: 'Showdown'
        },
        underscore: {
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
    'BlogAddPostController',
    'BlogDeletePostController',
    'RecentBlogPosts',
    'CreationsController',
    'ContactController',
    'underscore',
    'showdown'], 
    
    function(   $, 
                angular, 
                ngResource, 
                ngRoute, 
                BlogAddPostController,
                BlogDeletePostController,
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
                        templateUrl: 'partials/blog/recent-posts.html', 
                        controller: RecentBlogPosts
                    })
                    .when ('/blog/add', {
                        templateUrl: 'partials/blog/add-post.html',
                        controller: BlogAddPostController
                    })
                    .when('/blog/delete', {
                        templateUrl: 'partials/blog/delete-post.html',
                        controller: BlogDeletePostController
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
                    var date         = new Date($scope.post.date);
                    $scope.post.date = date.toDateString() + ' - ' + date.toLocaleTimeString();
                }
            };
        });

        nhs.filter('markdown', ['$sce', function ($sce) {
            var trusted = {};
            return function(input) {
                var converter = new Showdown.converter();
                // trusted is a hack to get around current angular infinite 
                // digest loop problem.
                // https://github.com/angular/angular.js/issues/3932
                return trusted[input] || (trusted[input] = $sce.trustAsHtml(converter.makeHtml(input || ''))); 
            }
        }]);

        nhs.factory('blogData', function($http) {
            var factory = {}

            factory.getRecentPosts = function(num) {
                var blogPostsUri = "http://nuclearhorsestudios.com/nuclearhorseblog/_design/blog/_view/all";
                
                return $http.get(blogPostsUri + '?limit=' + num + '&descending=true')   
            }

            factory.addPost = function(post) {
                var dbLocation = "http://nuclearhorsestudios.com/nuclearhorseblog/";
                
                return $http.post(dbLocation, post)
            }

            return factory;
        });
    
        return nhs;
    }
);
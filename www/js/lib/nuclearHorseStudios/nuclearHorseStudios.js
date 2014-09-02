define([
    'angular', 
    'ngResource', 
    'ngRoute',
    'ngCookies',
    'Controllers',
    'DbTypeFactory',
    'CouchFactory',
    'MarkDownFilter',
    'BlogPostDateFilter',
    'ngNav',
    'RouteProvider',
    'underscore',
    'showdown',
    'lightbox'], 
    
    function(
        angular, 
        ngResource, 
        ngRoute, 
        ngCookies,
        Controllers,
        DbTypeFactory,
        CouchFactory,
        MarkDownFilter,
        BlogPostDateFilter,
        ngNav,
        RouteProvider) 
    {
        'use strict';
        return angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute', 'ngCookies'])
                  .controller(Controllers)
                  .filter('markdown', ['$sce', MarkDownFilter])
                  .filter('blogPostDate', BlogPostDateFilter)
                  .directive('ngNav', ngNav)
                  .factory('blogData', new DbTypeFactory('blogpost', '', 'nuclearhorseblog', '_design/blog'))
                  .factory('CouchFactory', CouchFactory) 
                  .config([ '$routeProvider', RouteProvider ]);
    }
);
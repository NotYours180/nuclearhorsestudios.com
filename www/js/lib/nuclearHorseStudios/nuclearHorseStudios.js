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
    'ngOwl',
    'RouteProvider',
    'underscore',
    'showdown'], 
    
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
        ngOwl,
        RouteProvider) 
    {
        'use strict';
        return angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute', 'ngCookies'])
                  .controller(Controllers)
                  .filter('markdown', ['$sce', MarkDownFilter])
                  .filter('blogPostDate', BlogPostDateFilter)
                  .directive('ngOwl', ngOwl)
                  .factory('blogData', new DbTypeFactory('blogpost', '', 'nuclearhorseblog', '_design/blog'))
                  .factory('CouchFactory', CouchFactory) 
                  .config([ '$routeProvider', RouteProvider ]);
    }
);
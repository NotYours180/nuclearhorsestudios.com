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

        var blogDataFactory = new DbTypeFactory('blogpost', 
                                                '', 
                                                'nuclearhorseblog',
                                                '_design/blog');
        
        return angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute', 'ngCookies'])
                      .controller(Controllers)
                      .filter('markdown', ['$sce', MarkDownFilter])
                      .filter('blogPostDate', BlogPostDateFilter)
                      .directive('ngOwl', ngOwl)
                      .factory('blogData', blogDataFactory)
                      .factory('CouchFactory', CouchFactory) 
                      .config([ '$routeProvider', RouteProvider ]);
    }
);
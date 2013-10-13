define([
    'angular', 
    'ngResource', 
    'ngRoute',
    'js/lib/NuclearHorseStudios/Controllers',
    'DbTypeFactory',
    'MarkDownFilter',
    'BlogPostDateFilter',
    'js/lib/NuclearHorseStudios/RouteProvider',
    'underscore',
    'showdown'], 
    
    function(   
        angular, 
        ngResource, 
        ngRoute, 
        Controllers,
        DbTypeFactory,
        MarkDownFilter,
        BlogPostDateFilter,
        RouteProvider) 
    {
        var blogDataFactory = DbTypeFactory('blogpost', 
                                            '', 
                                            'nuclearhorseblog',
                                            '_design/blog');
        
        return angular.module('NuclearHorseStudios', ['ngResource', 'ngRoute'])
                      .controller(Controllers)
                      .filter('markdown', ['$sce', MarkDownFilter])
                      .filter('blogPostDate', BlogPostDateFilter)
                      .factory('blogData', blogDataFactory)
                      .config([ '$routeProvider', RouteProvider ]);
    }
);
define([
    'jquery', 
    'angular', 
    'ngResource', 
    'ngRoute',
    'Controllers',
    'DbTypeFactory',
    'BlogDataFactory',
    'MarkDownFilter',
    'BlogPostDateFilter',
    'RouteProvider',
    'underscore',
    'showdown'], 
    
    function(   
        $, 
        angular, 
        ngResource, 
        ngRoute, 
        Controllers,
        DbTypeFactory,
        BlogDataFactory,
        MarkDownFilter,
        BlogPostDateFilter,
        RouteProvider) 
    {
        var deps = ['ngResource', 'ngRoute'];
        var nhs  = angular.module('NuclearHorseStudios', deps);

        nhs.config([ '$routeProvider', RouteProvider ]);

        nhs.controller(Controllers);

        nhs.filter('markdown', ['$sce', MarkDownFilter]);
        nhs.filter('blogPostDate', BlogPostDateFilter);

        var blogDataFactory = DbTypeFactory('blogpost', 
                                            'http://nuclearhorsestudios.com', 
                                            'nuclearhorseblog',
                                            '_design/blog');

        nhs.factory('blogData', blogDataFactory);
    
        return nhs;
    }
);
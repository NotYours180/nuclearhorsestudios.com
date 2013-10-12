define([
    'jquery', 
    'angular', 
    'ngResource', 
    'ngRoute',
    'BlogAddPostController',
    'BlogDeletePostController',
    'BlogAdminController',
    'AdminController',
    'BlogDataFactory',
    'MarkDownFilter',
    'BlogPostDateFilter',
    'RouteProvider',
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
                BlogAdminController,
                AdminController,
                BlogDataFactory,
                MarkDownFilter,
                BlogPostDateFilter,
                RouteProvider,
                RecentBlogPosts,
                ContactController, 
                CreationsController) 
    {

        var deps = ['ngResource', 'ngRoute'];
        var nhs  = angular.module('NuclearHorseStudios', deps);

        nhs.config([ '$routeProvider', RouteProvider ]);

        var controllers = {
            RecentBlogPosts: RecentBlogPosts,
            BlogAddPostController: BlogAddPostController,
            BlogDeletePostController: BlogDeletePostController,
            BlogAdminController: BlogAdminController,
            AdminController: AdminController,
            CreationsController: CreationsController,
            ContactController: ContactController
        }

        nhs.controller(controllers);

        nhs.filter('markdown', ['$sce', MarkDownFilter]);
        nhs.filter('blogPostDate', BlogPostDateFilter);

        nhs.factory('blogData', BlogDataFactory);
    
        return nhs;
    }
);
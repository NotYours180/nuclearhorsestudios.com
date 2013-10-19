define(['Controllers'], function(controllers) {
    'use strict';

    return function($routeProvider) {
        $routeProvider
            .when('/blog', {
                templateUrl: 'partials/blog/recent-posts.html', 
                controller: controllers.RecentBlogPosts
            })
            .when('/blog/admin', {
                templateUrl: 'partials/blog/admin.html',
                controller: controllers.BlogAdminController
            })
            .when ('/blog/add', {
                templateUrl: 'partials/blog/add-post.html',
                controller: controllers.BlogAddPostController
            })
            .when('/blog/delete', {
                templateUrl: 'partials/blog/delete-post.html',
                controller: controllers.BlogDeletePostController
            })
            .when('/admin', {
                templateUrl: 'partials/admin.html',
                controller: controllers.AdminController
            })
            .when('/creations', {
                templateUrl: 'partials/creations.html', 
                controller: controllers.CreationsController
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html', 
                controller: controllers.ContactController
            })
            .otherwise({redirectTo: '/blog'});
    };
});
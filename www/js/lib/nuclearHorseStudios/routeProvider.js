define([
    'js/lib/nuclearHorseStudios/recentBlogPosts', 
    'js/lib/nuclearHorseStudios/blogAdminController', 
    'js/lib/nuclearHorseStudios/blogAddPostController', 
    'js/lib/nuclearHorseStudios/blogDeletePostController', 
    'js/lib/nuclearHorseStudios/adminController', 
    'js/lib/nuclearHorseStudios/creationsController', 
    'js/lib/nuclearHorseStudios/contactController'], 

    function(
        RecentBlogPosts,
        BlogAdminController,
        BlogAddPostController,
        BlogDeletePostController,
        AdminController,
        CreationsController,
        ContactController) 
    {
        return function($routeProvider) {
            $routeProvider
                .when('/blog', {
                    templateUrl: 'partials/blog/recent-posts.html', 
                    controller: RecentBlogPosts
                })
                .when('/blog/admin', {
                    templateUrl: 'partials/blog/admin.html',
                    controller: BlogAdminController
                })
                .when ('/blog/add', {
                    templateUrl: 'partials/blog/add-post.html',
                    controller: BlogAddPostController
                })
                .when('/blog/delete', {
                    templateUrl: 'partials/blog/delete-post.html',
                    controller: BlogDeletePostController
                })
                .when('/admin', {
                    templateUrl: 'partials/admin.html',
                    controller: AdminController
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
        };
});
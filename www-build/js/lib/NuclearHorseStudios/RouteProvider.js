define([
    'js/lib/NuclearHorseStudios/RecentBlogPosts', 
    'js/lib/NuclearHorseStudios/BlogAdminController', 
    'js/lib/NuclearHorseStudios/BlogAddPostController', 
    'js/lib/NuclearHorseStudios/BlogDeletePostController', 
    'js/lib/NuclearHorseStudios/AdminController', 
    'js/lib/NuclearHorseStudios/CreationsController', 
    'js/lib/NuclearHorseStudios/ContactController'], 

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
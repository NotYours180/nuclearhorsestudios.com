define([
    'js/lib/nuclearHorseStudios/controllers/recentBlogPostsController',
    'js/lib/nuclearHorseStudios/controllers/blogAddPostController',
    'js/lib/nuclearHorseStudios/controllers/blogDeletePostController',
    'js/lib/nuclearHorseStudios/controllers/blogAdminController',
    'js/lib/nuclearHorseStudios/controllers/adminController',
    'js/lib/nuclearHorseStudios/controllers/creationsController',
    'js/lib/nuclearHorseStudios/controllers/contactController',
    'js/lib/nuclearHorseStudios/controllers/loginController'], 

    function(
        RecentBlogPosts,
        BlogAddPostController,
        BlogDeletePostController,
        BlogAdminController,
        AdminController,
        CreationsController,
        ContactController,
        LoginController
    ) {
        
        return {
            RecentBlogPosts:            RecentBlogPosts,
            BlogAddPostController:      BlogAddPostController,
            BlogDeletePostController:   BlogDeletePostController,
            BlogAdminController:        BlogAdminController,
            AdminController:            AdminController,
            CreationsController:        CreationsController,
            ContactController:          ContactController,
            LoginController:            LoginController
        };
});
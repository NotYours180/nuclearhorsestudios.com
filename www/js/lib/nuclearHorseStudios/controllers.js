define([
    'js/lib/nuclearHorseStudios/recentBlogPosts',
    'js/lib/nuclearHorseStudios/blogAddPostController',
    'js/lib/nuclearHorseStudios/blogDeletePostController',
    'js/lib/nuclearHorseStudios/blogAdminController',
    'js/lib/nuclearHorseStudios/adminController',
    'js/lib/nuclearHorseStudios/creationsController',
    'js/lib/nuclearHorseStudios/contactController',
    'js/lib/nuclearHorseStudios/loginController'], 

    function(
        RecentBlogPosts,
        BlogAddPostController,
        BlogDeletePostController,
        BlogAdminController,
        AdminController,
        CreationsController,
        ContactController,
        LoginController) {
        
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
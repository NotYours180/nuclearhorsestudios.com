define([
    'js/lib/nuclearHorseStudios/recentBlogPosts',
    'js/lib/nuclearHorseStudios/blogAddPostController',
    'js/lib/nuclearHorseStudios/blogDeletePostController',
    'js/lib/nuclearHorseStudios/blogAdminController',
    'js/lib/nuclearHorseStudios/adminController',
    'js/lib/nuclearHorseStudios/creationsController',
    'js/lib/nuclearHorseStudios/contactController'], 

    function(
        RecentBlogPosts,
        BlogAddPostController,
        BlogDeletePostController,
        BlogAdminController,
        AdminController,
        CreationsController,
        ContactController) {
        
        return {
            RecentBlogPosts:            RecentBlogPosts,
            BlogAddPostController:      BlogAddPostController,
            BlogDeletePostController:   BlogDeletePostController,
            BlogAdminController:        BlogAdminController,
            AdminController:            AdminController,
            CreationsController:        CreationsController,
            ContactController:          ContactController
        };
});
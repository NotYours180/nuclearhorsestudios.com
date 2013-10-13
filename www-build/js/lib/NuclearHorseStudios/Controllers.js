define([
    'js/lib/NuclearHorseStudios/RecentBlogPosts',
    'js/lib/NuclearHorseStudios/BlogAddPostController',
    'js/lib/NuclearHorseStudios/BlogDeletePostController',
    'js/lib/NuclearHorseStudios/BlogAdminController',
    'js/lib/NuclearHorseStudios/AdminController',
    'js/lib/NuclearHorseStudios/CreationsController',
    'js/lib/NuclearHorseStudios/ContactController'], 

    function(
        RecentBlogPosts,
        BlogAddPostController,
        BlogDeletePostController,
        BlogAdminController,
        AdminController,
        CreationsController,
        ContactController) {
        
        return {
            RecentBlogPosts: RecentBlogPosts,
            BlogAddPostController: BlogAddPostController,
            BlogDeletePostController: BlogDeletePostController,
            BlogAdminController: BlogAdminController,
            AdminController: AdminController,
            CreationsController: CreationsController,
            ContactController: ContactController
        };
})
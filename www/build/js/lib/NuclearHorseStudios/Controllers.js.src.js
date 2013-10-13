define([
    'RecentBlogPosts',
    'BlogAddPostController',
    'BlogDeletePostController',
    'BlogAdminController',
    'AdminController',
    'CreationsController',
    'ContactController'], 

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
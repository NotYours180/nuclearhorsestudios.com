define([], function() {
    return function($http) {
        var factory = {};
        var dbLocation = "http://nuclearhorsestudios.com/nuclearhorseblog/";
        var blogPostsUri = dbLocation + "_design/blog/_view/all";
        
        factory.getRecentPosts = function(num) {    
            return $http.get(blogPostsUri + '?limit=' + num + '&descending=true');   
        };

        factory.getAllPosts = function() {
            return $http.get(blogPostsUri + '?descending=true');
        };

        factory.getPost = function(hash) {
            return $http.get(dbLocation + hash);
        };

        factory.addPost = function(post) {
            return $http.post(dbLocation, post);
        };

        factory.deletePost = function(post) {
            console.log(post._id);
        };

        return factory;
    };
});
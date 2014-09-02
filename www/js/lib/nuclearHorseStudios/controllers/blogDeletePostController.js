define([], function(angular) {
    return function($scope, blogData) {
       $scope.deletePost = function(postId, rev) {
            return blogData.delete(postId, rev);
       };
    };
});
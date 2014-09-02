define([], function() {
    return function($scope) {
        $scope.setPost = function(post) {
            $scope.$broadcast('setBlogPost', post);
        };
    };
});
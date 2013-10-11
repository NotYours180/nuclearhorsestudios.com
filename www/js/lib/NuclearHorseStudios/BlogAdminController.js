define([], function() {
    return function($scope) {
        $scope.setPost = function(post) {
            console.log($scope.$broadcast);
            $scope.$broadcast('setBlogPost', post);
        };
    }
});
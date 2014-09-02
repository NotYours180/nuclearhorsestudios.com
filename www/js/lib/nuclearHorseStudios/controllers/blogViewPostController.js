define([], function(angular, ngResource) {
    return function ($scope, blogData, $routeParams) {
        
        $scope.post = {};
        
        blogData.getDoc($routeParams.pageId)
            .success(function(data, status, headers, config) {
                $scope.post = data;
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });    
    };
});
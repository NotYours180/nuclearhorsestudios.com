define([], function(angular, ngResource) {
    return function ($scope, blogData) {
        
        $scope.posts = [];

        blogData.getRecent(5)
            .success(function(data, status, headers, config) {
                $scope.posts = _(data.rows).map(function(row) {
                    return row.value;
                });
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });    
    };
});
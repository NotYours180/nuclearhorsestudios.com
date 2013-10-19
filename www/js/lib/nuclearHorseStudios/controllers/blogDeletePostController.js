define([], function(angular) {
    return function($scope, blogData) {
        $scope.posts = [];

        blogData.getAllPosts()
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
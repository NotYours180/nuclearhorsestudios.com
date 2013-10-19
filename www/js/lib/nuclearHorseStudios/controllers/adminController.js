define([], function() {
    return function($scope, blogData) {
        $scope.posts = [];

        function filterResponse(data, status, headers, config) {
            this.posts = _(data.rows).map(function(row) {
                return row.value;
            });
        }

        function handleResponseError(data, status, headers, config) {
            this.status = status;
        }

        blogData.getAll()
            .success(filterResponse.bind($scope))
            .error(handleResponseError.bind($scope));
    };
});
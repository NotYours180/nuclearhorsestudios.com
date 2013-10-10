define(['angular', 'ngResource', 'underscore'], function(angular, ngResource) {
    return function ($scope, $http) {
        $http.get("http://nuclearhorsestudios.com/nuclearhorseblog/_design/blog/_view/all")
            .success(function(data, status, headers, config) {
                $scope.posts = _(data.rows).map(function(row) {
                    return row.value;
                });
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });    
    }
});


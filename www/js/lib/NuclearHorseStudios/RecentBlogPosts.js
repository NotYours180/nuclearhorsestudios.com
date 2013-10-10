define(['angular', 'ngResource', 'underscore'], function(angular, ngResource) {
    return function ($scope, $http) {
        $http.get("http://nuclearhorsestudios.com/nuclearhorseblog/_design/blog/_view/all?limit=3&descending=true")
            .success(function(data, status, headers, config) {
                $scope.posts = _(data.rows).map(function(row) {
                    return row.value;
                }).reverse();
            })
            .error(function(data, status, headers, config) {
                $scope.status = status;
            });    
    }
});


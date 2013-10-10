define(['angular', 'ngResource', 'underscore'], function(angular, ngResource) {
    return function ($scope, $http) {
        var recentPostsUri = "http://nuclearhorsestudios.com/nuclearhorseblog/_design/blog/_view/all?limit=3&descending=true";
        
        $http.get(recentPostsUri)
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
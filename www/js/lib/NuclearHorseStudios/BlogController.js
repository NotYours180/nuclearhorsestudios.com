define(['angular', 'ngResource', 'underscore'], function(angular, ngResource) {
    return function ($scope, $http) {
        
        $http.get("http://localhost:5984/nuclearhorseblog/_design/blog/_view/all")
            .success(function(data, status, headers, config) {
                $scope.posts = _(data.rows).map(function(row) {
                    var blogPostData    = row.value;
                    var date            = new Date(blogPostData.date * 1000);

                    blogPostData.date   = date.toDateString() + ' - ' + date.toLocaleTimeString();

                    return blogPostData;
                });
            }).error(function(data, status, headers, config) {
                $scope.status = status;
            });
    }
});

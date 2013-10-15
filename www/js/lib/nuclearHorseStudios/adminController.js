define(['jquery', 'jqueryCouch'], function($) {
    return function($scope, blogData) {
        $scope.posts = [];

        console.log(window.location.hostname + ":5984");
        $.couch.urlPrefix = window.location.hostname + ":5984";
        console.log($.couch.info({
            success: function(data) {
                console.log(data);
            }
        }));        
        // console.log($.couch.session({
        //     success: function(data) {
        //         console.log(data);
        //     }
        // }));
        blogData.getAll()
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
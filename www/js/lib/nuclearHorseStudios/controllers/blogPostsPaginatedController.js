define(['underscore'], function() {
    return function($scope, blogData) {

        var _requestedPage;

        $scope.currentPage = 1;

        $scope.onGetPage = function(data, status) {
            $scope.posts = _(data.rows).map(function(row) {
                return row.value;
            });

            $scope.currentPage = _requestedPage;
        };

        $scope.getPage = function(pageNum, itemsPerPage) {
            _requestedPage = pageNum;
            
            return blogData.getPage(pageNum, itemsPerPage)
                           .success($scope.onGetPage);
        };
    };
});
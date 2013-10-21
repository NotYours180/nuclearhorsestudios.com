define(['underscore'], function() {
    'use strict';

    return function($scope, blogData) {

        var _requestedPage,
            _requestedItemsPerPage;

        $scope.currentPage  = 1;
        $scope.itemsPerPage = 5;
        $scope.totalPosts   = 0;

        $scope.onGetPage = function(data, status) {
            $scope.posts = _(data.rows).map(function(row) {
                return row.value;
            });

            $scope.currentPage  = _requestedPage;
            $scope.itemsPerPage = _requestedItemsPerPage;
            $scope.totalPosts   = data.total_rows;
            $scope.numPages     = parseInt($scope.totalPosts / $scope.itemsPerPage, 10);
        };

        $scope.getPage = function(pageNum, itemsPerPage) {
            _requestedPage          = pageNum;
            _requestedItemsPerPage  = itemsPerPage;

            return blogData.getPage(pageNum, itemsPerPage)
                           .success($scope.onGetPage);
        };
    };
});
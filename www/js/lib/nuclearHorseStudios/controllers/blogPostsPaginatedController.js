define(['underscore'], function() {
    'use strict';

    return function($scope, blogData, $routeParams) {

        var _requestedPage,
            _requestedItemsPerPage;

        $scope.currentPage  = $routeParams.pageNumber || 1;
        $scope.itemsPerPage = 3;
        $scope.totalPosts   = 0;
        $scope.prevPage = parseInt($scope.currentPage, 10) - 1;
        $scope.nextPage = parseInt($scope.currentPage, 10) + 1;

        $scope.onGetPage = function(data, status) {
            $scope.posts = _(data.rows).map(function(row) {
                return row.value;
            });

            $scope.currentPage  = _requestedPage;
            $scope.itemsPerPage = _requestedItemsPerPage;
            $scope.prevPage     = parseInt($scope.currentPage, 10) - 1;
            $scope.nextPage     = parseInt($scope.currentPage, 10) + 1;
            $scope.totalPosts   = data.total_rows;
            $scope.numPages     = parseInt($scope.totalPosts / $scope.itemsPerPage, 10);
        };

        $scope.getPage = function(pageNum, itemsPerPage) {
            _requestedPage          = pageNum;
            _requestedItemsPerPage  = itemsPerPage;

            return blogData.getPage(pageNum, itemsPerPage)
                           .success($scope.onGetPage);
        };
        
        $scope.getPage($scope.currentPage, $scope.itemsPerPage);
    };
});
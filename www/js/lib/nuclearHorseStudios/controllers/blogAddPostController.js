define([], function() {
    'use strict';

    return function ($scope, blogData) {

        $scope.isPosting  = false;
        
        $scope.$on('setBlogPost', function(ev, post) {
            $scope.post = post;
        });

        $scope.onAddSuccess = function(data, status, headers, config) {
            $scope.resetPost();
            $scope.status = 'Post Successful!';
        };

        $scope.onAddError = function(data, status, headers, config) {
            $scope.status = status + ' - ' + data.error + ": " + data.reason;
        };

        $scope.savePost = function(scope) {
            $scope = scope;
            if (scope.addForm.$valid) { 

                if (scope.isPosting === true) { return; } 

                scope.isPosting = true;

                scope.post.date = new Date().getTime();
                scope.status = 'Submitting form ...';
                
                blogData.add($scope.post)
                    .success($scope.onAddSuccess)
                    .error($scope.onAddError)
                    .finally(function() { scope.isPosting = false; });                 
            } 
            else { scope.status = "Form Invalid"; }
        };

        $scope.resetPost = function() {
            $scope.post = {};
            $scope.post.date = new Date().getTime();
            $scope.post.type = "blogpost";
            $scope.status = '';
        };

        $scope.resetPost();
    };
});

define([], function() {
    return function ($scope, blogData) {

        var self       = this;
        var isPosting  = false;
        
        $scope.$on('setBlogPost', function(ev, post) {
            $scope.post = post;
        });

        $scope.onAddSuccess = function(data, status, headers, config) {
            $scope.resetPost();
            $scope.status = 'Post Successful!';
        };

        $scope.onAddError = function(data, status, headers, config) {
            $scope.status = status + ' - ' + data.error + ":" + data.reason;
        };

        $scope.savePost = function() {
            if (!$scope.addForm.$valid) { 
                $scope.status = "Form Invalid"; 
                return; 
            }

            if ($scope.isPosting === true) { 
                return; 
            } 

            isPosting = true;

            $scope.post.date = new Date().getTime();
            $scope.status = 'Submitting form ...';
            
            blogData.add($scope.post)
                .success($scope.onAddSuccess)
                .error($scope.onAddError)
                .finally(function() { isPosting = false; }); 
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

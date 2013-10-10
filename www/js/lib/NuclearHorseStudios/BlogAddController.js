define([], function() {
    return function ($scope, blogData, $sce) {

        var self       = this;
        var isPosting  = false;

        this.onPostSuccess = function(data, status, headers, config) {
            $scope.resetPost();
            $scope.status = 'Post Successful!';
            isPosting = false;
        }

        this.onPostError = function(data, status, headers, config) {
            $scope.status = status + ' - ' + data.error + ":" + data.reason;
        }

        $scope.savePost = function() {
            
            if (!$scope.addForm.$valid) { 
                $scope.status = "Form Invalid"; 
                return; 
            }

            if (isPosting === true) { return; } else { isPosting = true; } 

            $scope.post.date = new Date().getTime();
            $scope.status = 'Submitting form ...';
            
            blogData.addPost($scope.post)
                .success(self.onPostSuccess)
                .error(self.onPostError); 
        }

        $scope.resetPost = function() {
            $scope.post = {};
            $scope.post.date = new Date().getTime();
            $scope.post.type = "blogpost";
            $scope.status = '';
        }


        $scope.resetPost();
    }
});

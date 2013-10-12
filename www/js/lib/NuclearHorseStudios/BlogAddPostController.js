define([], function() {
    return function ($scope, blogData, $sce) {

        var self       = this;
        var isPosting  = false;
        
        $scope.$on('setBlogPost', function(ev, post) {
            $scope.post = post;
        });

        $scope.savePost = function(scope) {
            if (!scope.addForm.$valid) { 
                scope.status = "Form Invalid"; 
                return; 
            }

            if (isPosting === true) { return; } else { isPosting = true; } 

            scope.post.date = new Date().getTime();
            scope.status = 'Submitting form ...';
            
            blogData.addPost(scope.post)
                .success(function(data, status, headers, config) {
                    scope.resetPost();
                    scope.status = 'Post Successful!';
                    isPosting = false;
                })
                .error(function(data, status, headers, config) {
                    scope.status = status + ' - ' + data.error + ":" + data.reason;
                }); 
        };

        $scope.resetPost = function() {
            $scope.post = {};
            $scope.post.date = new Date().getTime();
            $scope.post.type = "blogpost";
            $scope.status = '';
        };

        $scope.resetPost();
    }
});

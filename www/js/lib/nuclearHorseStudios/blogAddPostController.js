define([], function() {
    return function ($scope, blogData) {

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

            if (isPosting === true) { return; } 

            isPosting = true;

            scope.post.date = new Date().getTime();
            scope.status = 'Submitting form ...';
            
            blogData.add(scope.post)
                .success(function(data, status, headers, config) {
                    scope.resetPost();
                    scope.status = 'Post Successful!';
                })
                .error(function(data, status, headers, config) {
                    scope.status = status + ' - ' + data.error + ":" + data.reason;
                })
                .finally(function() {
                    isPosting = false;
                }); 
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

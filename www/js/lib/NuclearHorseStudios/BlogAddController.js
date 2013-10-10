define(['jquery', 'angular', 'ngResource', 'underscore'], function($, angular, ngResource) {
    return function ($scope, $http) {

        var $formElems = $("#blog-post-add :input");
        var dbLocation = "http://nuclearhorsestudios.com/nuclearhorseblog/";
        var self       = this;

        this.onPostSuccess = function(data, status, headers, config) {
            $scope.resetPost();
            $scope.status = 'Post Successful!';
            $formElems.attr("disabled", false);
        }

        this.onPostError = function(data, status, headers, config) {
            $scope.status = status;
            $formElems.attr("disabled", false);
        }

        $scope.savePost = function() {
            
            $scope.post.date = new Date().getTime();
            $scope.status = 'Submitting form ...';
            
            $formElems.attr("disabled", true);
            
            $http.post(dbLocation, $scope.post)
                .success(self.onPostSuccess)
                .error(self.onPostError); 
        }

        $scope.resetPost = function() {
           $scope.post = {};
           $scope.post.date = new Date().getTime();
           $scope.post.type = "blogpost";
        }

        $scope.resetPost();
    }
});

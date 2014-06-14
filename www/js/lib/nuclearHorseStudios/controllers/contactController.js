define([], function() {
    return function ($scope, $http) {

        $scope.contact    = {};
        $scope.successful = false;
        $scope.isPosting  = false;

        $scope.onSuccess = function() {
            $scope.successful = true;
            $scope.isPosting  = false;
        };

        $scope.onError = function() {
            $scope.successful = false;
            $scope.isPosting  = false;
        };

        $scope.submitContact = function(s) {
            $scope.contact.type = "contact";
            $scope.isPosting    = true;
            
            if (s.contactForm.$valid) {
                $http.post('http://nuclearhorsestudios.com/contact', $scope.contact)
                    .success($scope.onSuccess)
                    .error($scope.onError);    
            }
        };
    };
});
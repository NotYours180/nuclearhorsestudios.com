define([], function($) {
    return function($scope, CouchFactory, $cookies) {
        $scope.login = {};
        $scope.loggedIn = false;

        $scope.isLoggedIn = function() {
            $scope.loggedIn = !!$cookies.AuthSession;
            return $scope.loggedIn;
        };

        $scope.login = function() {
            CouchFactory.logIn($scope.login.username, $scope.login.password)
                        .then(CouchFactory.getSession);
        };
    };
});
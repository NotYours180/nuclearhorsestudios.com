define(['jquery', 'jqueryCookie'], function($) {
    return function($scope, CouchFactory) {
        $scope.login = {};

        $scope.isLoggedIn = function() {
            return !!$.cookie('AuthSession');
        };

        $scope.login = function() {
            CouchFactory.logIn($scope.login.username, $scope.login.password);
        };
    };
});
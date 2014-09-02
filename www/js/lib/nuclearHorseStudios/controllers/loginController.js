define([], function() {
    'use strict';

    return function($scope, CouchFactory, $cookies) {
        $scope.login = {};
        $scope.loggedIn = false;

        $scope.onLogin = function() {
            CouchFactory.getSession()
                        .success($scope.isLoggedIn);
        };

        $scope.isLoggedIn = function() {
            $scope.loggedIn =   CouchFactory.sessionInfo.userCtx && 
                                CouchFactory.sessionInfo.userCtx.name !== null;
            return $scope.loggedIn;
        };

        $scope.login = function() {
            CouchFactory.logIn($scope.login.username, $scope.login.password)
                        .success($scope.onLogin);
        };

        $scope.onLogin();
    };
});
define(['Controllers', 'CouchFactory', 'ngCookies'], function(Controllers, CouchFactory) {
    var $scope, loginController, factory;

    angular.module('testApp', ['ngCookies']);

    describe('LoginController', function() {

        beforeEach(angular.mock.module('testApp'));

        var setAuthCookie = inject(function ($cookies) {
            $cookies.AuthSession = 'YW5uYTo0QUIzOTdFQjrC4ipN-D-53hw1sJepVzcVxnriEw';
        });

        var removeAuthCookie = inject(function($cookies) {
            delete $cookies.AuthSession;
        });
        afterEach(function() {
            removeAuthCookie();
        });

        var initController = inject(function ($http, $cookies) {
            factory = CouchFactory($http);
            $scope = {};
            loginController = Controllers.LoginController($scope, factory, $cookies);
        });


        it('Scope has an isLoggedIn function which defaults to false', function() {
            initController();   
            expect($scope.isLoggedIn()).toBeDefined();
            expect($scope.isLoggedIn()).toBe(false);
        });

        it('isLoggedIn is true when user has an auth cookie', function() {
            setAuthCookie();
            initController();

            expect($scope.isLoggedIn()).toBe(true);
        });

        it('Has a login function attached to scope', function() {
            initController();

            expect($scope.login).toBeDefined();
        });

        it('login function calls the logIn function on couchfactory', function() {
            initController();

            var loginSpy = spyOn(factory, 'logIn').andCallThrough();
            $scope.login();
            expect(loginSpy).toHaveBeenCalled();
        });
    });
});
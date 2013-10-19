define(['Controllers', 'CouchFactory', 'MockHttp', 'ngCookies'], 
        function(Controllers, CouchFactory, MockHttp) 
{
    'use strict';
    
    var $scope, loginController, factory, loggedOutResponse, loggedInResponse;

    angular.module('testApp', ['ngCookies']);

    describe('LoginController', function() {

        beforeEach(angular.mock.module('testApp'));

        var initController = inject(function ($cookies) {
            loggedOutResponse = {
                ok:true,
                userCtx: {
                    name: null,
                    roles: []
                },
            };

            loggedInResponse = {
                ok:true,
                userCtx: {
                    name: 'username',
                    roles: ['admin']
                },
            };

            factory = CouchFactory(MockHttp, $cookies);
            $scope = {};
            $scope.login = {};
            $scope.login.username = 'username';
            $scope.login.password = 'password';

            loginController = Controllers.LoginController($scope, factory, $cookies);
        });

        afterEach(function() {
            factory.sessionInfo = null;
        });

        describe('isLoggedIn', function() {
            
            beforeEach(initController);

            it('Scope has an isLoggedIn function which defaults to false', function() {
                MockHttp.data = loggedOutResponse;
                initController();
                expect($scope.isLoggedIn()).toBeDefined();
                expect($scope.isLoggedIn()).toBe(false);
            });

            it('Returns true when user has valid session info', function() {
                MockHttp.data = loggedInResponse;
                initController();
                $scope.login();

                expect($scope.isLoggedIn()).toBe(true);
            });

            it('Returns false when user does not have valid sessionInfo', function() {
                MockHttp.data = loggedOutResponse;
                initController();
                expect($scope.isLoggedIn()).toBe(false);
            });
        });

        describe('login', function() {

            beforeEach(initController);
            it('Has a login function attached to scope', function() {

                expect($scope.login).toBeDefined();
            });

            it('login function calls the logIn function on couchfactory', function() {
                var loginSpy = spyOn(factory, 'logIn').andCallThrough();
                $scope.login();

                expect(loginSpy).toHaveBeenCalledWith($scope.login.username, 
                                                      $scope.login.password);
            });

            it('Calls onLogin after successful request', function() {
                var onLoginSpy = spyOn($scope, 'onLogin');

                $scope.login();

                expect(onLoginSpy).toHaveBeenCalled();
            });

        });
    });
});
define(['Controllers', 'CouchFactory'], function(Controllers, CouchFactory) {
    var $scope, loginController, factory;

    function setAuthCookie() {
        $.cookie("AuthSession", "YW5uYTo0QUIzOTdFQjrC4ipN-D-53hw1sJepVzcVxnriEw");
    }

    function removeAuthCookie() {
        $.removeCookie('AuthSession');
    }
    
    describe('LoginController', function() {

        var initController = inject(function ($http) {
            factory = CouchFactory($http);
            $scope = {};
            loginController = Controllers.LoginController($scope, factory);
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

            var loginSpy = spyOn(factory, 'logIn');
            $scope.login();
            expect(loginSpy).toHaveBeenCalled();
        });
    });
});
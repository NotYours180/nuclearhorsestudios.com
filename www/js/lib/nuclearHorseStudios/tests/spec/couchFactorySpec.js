define(['CouchFactory', 'MockHttp', 'ngCookies', 'underscore'], function(CouchFactory, MockHttp) {
    describe('CouchFactory', function() {
        var factory, $http;

        var initFactory = inject(function($cookies) {
            factory = CouchFactory($http, $cookies);
            host    = factory.host;
        });

        beforeEach(function() {
            $http = MockHttp;

            angular.module('testApp', ['ngCookies']);
        });

        beforeEach(angular.mock.module('testApp'));

        describe('Session Management', function() {
            var getSpy, postSpy;

            var setAuthCookie = inject(function ($cookies) {
                $cookies.AuthSession = 'YW5uYTo0QUIzOTdFQjrC4ipN-D-53hw1sJepVzcVxnriEw';
            });

            var removeAuthCookie = inject(function ($cookies) {
                delete $cookies.AuthSession;
            });
            
            beforeEach(function() {
                getSpy  = spyOn($http, 'get').andCallThrough();
                postSpy = spyOn($http, 'post').andCallThrough(); 

                $http.data = {
                    userCtx: {
                        name: null
                    }
                };
            });
            
            describe('getSession', function() {
                
                beforeEach(initFactory);

                it( 'Calls $http get with the correct url to get a user session', function() {   
                    factory.getSession();
                
                    expect(getSpy).toHaveBeenCalledWith(host + '/_session');
                });

                it( 'Retuns the $http object after call.', function() {
                    var retHttp = factory.getSession();
                
                    expect(retHttp).toBe($http);
                });

                it( 'Sets the sessionInfo object with session info', function() {
                    factory.getSession();

                    expect(factory.sessionInfo).toBe($http.data);
                });
            });

            describe('Login', function() {
                afterEach(function() {
                    removeAuthCookie();
                });

                describe('isLoggedIn', function() {
                
                    it('Returns false when the user is not yet logged in', function() {
                        initFactory();

                        expect(factory.isLoggedIn).toBe(false);
                    });

                    it('Returns true when user has an auth cookie.', function() {
                        $http.data = {
                            userCtx: {
                                name: 'username'
                            }
                        };
                        
                        setAuthCookie();
                        initFactory();
                        expect(factory.isLoggedIn).toBe(true);
                    });
                });

                describe('logIn', function() {

                    beforeEach(function() {
                        setAuthCookie();
                        $http.data = {
                            userCtx: {
                                name: 'username'
                            }
                        };
                    });

                    it('Calls $http.post with the correct url to login', function() {
                        var data = {
                            name: 'username', 
                            password: 'password'
                        };

                        initFactory();
                        factory.logIn(data.name, data.password);

                        expect(postSpy).toHaveBeenCalledWith(host + '/_session', data);
                    });

                    it('Returns true when user is logged in', function() {
                        initFactory();
                        factory.logIn('username', 'password');

                        expect(factory.isLoggedIn).toBe(true);
                    });
                });
            });
        });
    });
});
define(['CouchFactory', 'jquery', 'jqueryCookie', 'underscore'], function(CouchFactory, $) {
    describe('CouchFactory', function() {
        var factory, $http;

        function initFactory() {
            factory = CouchFactory($http);
            host    = factory.host;
        }

        beforeEach(function() {
            $http = {
                successFns: [],
                data: { some: 'data' },
                get: function() { return this; },
                post: function() { return this; },
                success: function(fn) { 
                    this.successFns.push(fn); 
                    fn(this.data); 
                    return this; 
                },
                error: function() {}
            };
        });

        describe('Session Management', function() {
            var getSpy, postSpy;

            function setAuthCookie() {
                $.cookie("AuthSession", "YW5uYTo0QUIzOTdFQjrC4ipN-D-53hw1sJepVzcVxnriEw");
            }

            function removeAuthCookie() {
                $.removeCookie('AuthSession');
            }
            
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

                        initFactory();
                    });

                    it('Calls $http.post with the correct url to login', function() {
                        var data = {
                            username: 'username', 
                            password: 'password'
                        };
                        
                        factory.logIn(data.username, data.password);

                        expect(postSpy).toHaveBeenCalledWith(host + '/_session', data);
                    });

                    it('Returns true when user is logged in', function() {
                        factory.logIn('username', 'password');

                        expect(factory.isLoggedIn).toBe(true);
                    });
                });

            });
        });
    });
});
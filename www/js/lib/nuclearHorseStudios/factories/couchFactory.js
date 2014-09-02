define([], function() {
    'use strict';

    return function($http, $cookies) {
        var factory;

        factory = {
            host: 'http://' + window.location.host + '/db',
            isLoggedIn: false,
            sessionInfo: {},

            logIn: function(username, password) {
                var data = {
                    name: username,
                    password: password
                };

                return $http.post(factory.host + '/_session', data)
                            .success(factory._setSessionInfo);
            },

            getSession: function() {
                return $http.get(factory.host + '/_session')
                            .success(factory._setSessionInfo);
            },

            checkIfLoggedIn: function() {
                var hasAuthSession = $cookies.AuthSession !== undefined;
                var hasSessionInfo = factory.sessionInfo.userCtx !== undefined &&
                                     factory.sessionInfo.userCtx.name !== null;

                this.isLoggedIn = hasAuthSession && hasSessionInfo; 
                
                return factory.isLoggedIn;
            },

            _setSessionInfo: function(data, status, headers, config) {
                factory.sessionInfo = data;
                factory.checkIfLoggedIn();
            }
        };

        factory.getSession();
        
        return factory;
    };
});
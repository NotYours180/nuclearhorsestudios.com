define(['ngCookies'], function() {

    return function($http, $cookies) {
        var factory;

        factory = {
            host: 'http://www.nuclearhorsestudios.com:5984',
            isLoggedIn: false,

            logIn: function(username, password) {
                var data = {
                    name: username,
                    password: password
                };

                return $http.post(this.host + '/_session', data)
                            .success(factory._setSessionInfo);
            },

            getSession: function() {
                return $http.get(this.host + '/_session')
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
                console.log($cookies);
                factory.checkIfLoggedIn();
            },

            sessionInfo: null
        };

        factory.getSession();
        
        return factory;
    };
});
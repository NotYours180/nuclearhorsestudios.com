define(['jquery', 'jqueryCookie'], function($) {

    return function($http) {
        var factory;
        
        function _setSessionInfo(data) {
            factory.sessionInfo = data;
            factory.checkIfLoggedIn();
        }

        factory = {
            host: 'http://www.nuclearhorsestudios.com:5984',
            isLoggedIn: false,

            logIn: function(username, password) {
                var data = {
                    username: username,
                    password: password
                };

                return $http.post(this.host + '/_session', data)
                            .success(_setSessionInfo);
            },

            getSession: function() {
                return $http.get(this.host + '/_session')
                            .success(_setSessionInfo);
            },

            checkIfLoggedIn: function() {
                var hasAuthSession = $.cookie('AuthSession') !== undefined;
                var hasSessionInfo = factory.sessionInfo.userCtx !== undefined &&
                                     factory.sessionInfo.userCtx.name !== null;

                this.isLoggedIn = hasAuthSession && hasSessionInfo; 
                
                return factory.isLoggedIn;
            },

            sessionInfo: null
        };

        factory.getSession();
        
        return factory;
    };
});
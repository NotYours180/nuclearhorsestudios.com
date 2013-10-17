define(['jquery', 'jqueryCookie'], function($) {

    return function($http) {
        var factory;
        
        function _setSessionInfo(data) {
            factory.sessionInfo = data;
        }

        factory = {
            host: 'http://www.nuclearhorsestudios.com:5894',
            
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

            isLoggedIn: function() {
                var hasAuthSession = $.cookie('AuthSession') !== undefined;
                var hasSessionInfo = factory.sessionInfo.userCtx !== undefined &&
                                     factory.sessionInfo.userCtx.name !== null;

                return hasAuthSession && hasSessionInfo;
            },

            sessionInfo: null
        };

        factory.getSession();

        return factory;
    };
});
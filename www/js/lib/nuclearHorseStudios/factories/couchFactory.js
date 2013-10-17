define([], function() {

    return function($http) {
        
        var couchFactory = {

            getSession: function() {
                return $http.get('http://www.example.com/_session');
            }
        };

        return couchFactory;
    };
});
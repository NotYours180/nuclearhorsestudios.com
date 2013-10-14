define([], function() {
    return function(type, host, dbName, designDoc) {

        return function($http) {

            var factory = {};
            var dbLocation = host + "/" + dbName;
            var docViewUri = dbLocation + "/" + designDoc + "/_view/" + type;
        
            factory.getRecent = function(num) {
                var params = '?limit=' + num + '&descending=true';
                return $http.get(docViewUri + params);
            };

            factory.getAll = function() {
                var params = '?descending=true';
                return $http.get(docViewUri + params);
            };

            factory.add = function(data) {
                
                return $http.post(dbLocation, data);
            };

            factory.delete = function(id) {
                
                console.log(id);
            };

            factory.getPage = function(pageNum, itemsPerPage) {
                
                var offset = (pageNum - 1) * itemsPerPage;
                var params = '?skip=' + offset + 
                             '&limit='  + itemsPerPage + 
                             '&descending=true';

                return $http.get(docViewUri + params);
            };

            return factory;
        };
    };
});
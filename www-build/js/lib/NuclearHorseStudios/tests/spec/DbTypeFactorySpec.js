define(['DbTypeFactory'], function(DbTypeFactory) {
        
        describe("DbTypeFactory", function() {
            var factory, $http, type, host, dbName, designDoc;

            beforeEach(function() {
                $http = {
                    get: function() {},
                    post: function() {}
                };

                type        = 'blogpost';
                host        = 'http://nuclearhorsestudios.com';
                dbName      = 'nuclearhorseblog';
                designDoc   = '_design/blog';

                factory = DbTypeFactory(type, host, dbName, designDoc)($http);
            });

            describe('add', function() {
          
                it('Calls $http.post with the correct url for adding data', function() {
                    spyOn($http, 'post').andCallFake(function(url) {
                        expect(url).toBe(host + '/' + dbName);
                    });

                    var results = factory.add({ some: 'data' });
                });
            });

            describe('getAll', function() {
          
                it('Calls $http.get with the correct url for all records', function() {
                    spyOn($http, 'get').andCallFake(function(url) {
                        expect(url).toBe(   host      + '/' + 
                                            dbName    + '/' + 
                                            designDoc + '/_view/' + 
                                            type      + '?descending=true');
                    });

                    var results = factory.getAll();
                });
            });

            describe('getRecent', function() {
          
                it('Calls $http.get with the correct url for the 5 most recent records', function() {
                    spyOn($http, 'get').andCallFake(function(url) {
                        expect(url).toBe(   host      + '/' + 
                                            dbName    + '/' + 
                                            designDoc + '/_view/' + 
                                            type      + '?limit=5&descending=true');
                    });
                    
                    var results = factory.getRecent(5);
                });
            });

            describe('getPage', function() {
                var spy;

                beforeEach(function() {
                    spy = spyOn($http, 'get');
                });

                it('Calls $http.get with the correct url for retrieving the first page, 10 results per page', function() {
                    
                    var expectedUrl =       host      + '/' + 
                                            dbName    + '/' + 
                                            designDoc + '/_view/' + 
                                            type      + '?skip=0&limit=10&descending=true';
                    
                    var results = factory.getPage(1, 10);
                    
                    expect(spy).toHaveBeenCalledWith(expectedUrl);
                });

                it('Calls $http.get with the correct url for retrieving the third page, 4 results per page', function() {
                    
                    var expectedUrl =       host      + '/' + 
                                            dbName    + '/' + 
                                            designDoc + '/_view/' + 
                                            type      + '?skip=8&limit=4&descending=true';
                    
                    var results = factory.getPage(3, 4);
                    console.log(expectedUrl)
                    
                    expect(spy).toHaveBeenCalledWith(expectedUrl);
                });
            });
        });
    }
);
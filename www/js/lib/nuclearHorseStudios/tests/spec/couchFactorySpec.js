describe('CouchFactory', function() {
    var httpBackend, factory;

    angular.module('testApp', ['ngMock']).factory('cFactory', CouchFactory);

    beforeEach(angular.mock.module('testApp'));

    beforeEach(inject(function($httpBackend, cFactory) {
        httpBackend = $httpBackend;
        factory = cFactory;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('Session', function() {

        it( 'Calls $http get with the correct url to get a user session', function() {   
            httpBackend.expectGET('http://www.example.com/_session');
            factory.getSession();
            httpBackend.flush();
        });
    });
});
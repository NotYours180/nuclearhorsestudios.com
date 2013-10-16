define(['CouchFactory', 'angular', 'ngMock'], function(couchFactory) {
    
    angular.module('testApp', ['ngMock']).factory('cFactory', couchFactory);

    describe('CouchFactory', function() {
        var httpBackend, factory;

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
});
define(['CouchFactory'], function(CouchFactory) {
    describe('CouchFactory', function() {
        var httpBackend, factory, http, module;

        beforeEach(function() {
            module = angular.module('testApp', ['ngMock']);
            angular.mock.module('testApp'); 
        });

        beforeEach(inject(function($httpBackend, $http) {
            module.factory('couchFactory', CouchFactory);
            httpBackend = $httpBackend;
            http = $http;
        }));

        beforeEach(inject(function(couchFactory) {
            factory = couchFactory;
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        describe('Session', function() {

            it( 'Calls $http get with the correct url to get a user session', function() {   
                httpBackend.expectGET('http://www.example.com/_session');
                factory.getSession();
            });
        });
    });
});
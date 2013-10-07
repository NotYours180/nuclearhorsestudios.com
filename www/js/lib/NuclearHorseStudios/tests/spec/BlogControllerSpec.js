define([
    'jquery', 
    'angular', 
    'ngResource', 
    'ngRoute', 
    'BlogController',
    'jasmine',
    'jasmineFixture',
    'underscore'],

    function($, angular, ngResource, ngRoute, BlogController) {
        var container;

        beforeEach(function() {
            container = affix('#container');
        });

        describe("Blog Controller", function() {
            
            it('should be true', function() {
                expect($(container).length).toBe(1);
            });

        });
    }
);
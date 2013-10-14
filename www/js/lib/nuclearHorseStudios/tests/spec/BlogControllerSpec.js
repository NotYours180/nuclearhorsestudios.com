define([
    'jquery', 
    'angular', 
    'ngResource', 
    'BlogController',
    'jasmine',
    'jasmineFixture',
    'underscore'],

    function($, angular, ngResource, BlogController) {
        
        

        describe("Blog Controller", function() {
            var $scope;

            beforeEach(function() {
                $scope = {};
                BlogController($scope);
            });

            it('should be true', function() {
                console.log($scope);

            });
        });
    }
);
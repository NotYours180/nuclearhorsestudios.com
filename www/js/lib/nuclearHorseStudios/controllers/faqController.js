define([], function() {
    'use strict';

    return function ($scope, $location, $anchorScroll) {
        $scope.faqs = [];

        $scope.scrollToHash = function(hash) {
            $location.hash(hash);
            $anchorScroll();
        };
    };
});
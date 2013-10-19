define(['showdown'], function() {
    'use strict';

    return function ($sce) {
        var trusted = {};
        return function(input) {
            var converter = new Showdown.converter();
            // trusted is a hack to get around current angular infinite 
            // digest loop problem.
            // https://github.com/angular/angular.js/issues/3932
            return trusted[input] || (trusted[input] = $sce.trustAsHtml(converter.makeHtml(input || ''))); 
        }
    }
});
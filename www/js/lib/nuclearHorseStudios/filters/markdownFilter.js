define(['showdown'], function() {
    'use strict';

    return function ($sce) {
        var trusted = {};
        return function(input) {
            var converter = new Showdown.converter();
            var html = converter.makeHtml(input || '');
            // trusted is a hack to get around current angular infinite 
            // digest loop problem.
            // https://github.com/angular/angular.js/issues/3932
            trusted[input] = trusted[input] || $sce.trustAsHtml(html);
            return trusted[input]; 
        };
    };
});
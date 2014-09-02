define([], function() {
    'use strict';

    return function() {
        return function(input) {
            var date = new Date(input);
            return date.toDateString() + ' - ' + date.toLocaleTimeString();
        };
    };
});
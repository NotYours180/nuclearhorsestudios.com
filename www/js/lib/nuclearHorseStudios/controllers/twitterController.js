define(['jquery'], function($) {
    'use strict';
    return function($scope, $timeout) {
        // Hack so twitter will rerender the tweets
        $timeout(function() {
            $.ajax({ 
                url: 'http://platform.twitter.com/widgets.js', 
                dataType: 'script', 
                cache:true
            });
        }, 10);
    };
});
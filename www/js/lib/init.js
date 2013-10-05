(function() {
    requirejs.config({
        baseUrl: 'js/lib',
        paths: {
            jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
            angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min',
            underscore: 'dep/underscore.min'
        },
        shim: {
            'angular': { 
                deps: ['jquery'],
                exports: 'angular'
            },
            'underscore': {
                exports: '_'
            }
        },
        map: {
            '*': { 
                jquery: 'dep/jqueryPrivate',
            },

            'dep/jqueryPrivate':  { jquery:  'jquery'  }
        }
    });

    require(['jquery', 'angular', 'underscore'], function($, angular) {
        console.log(_);
    });
})();
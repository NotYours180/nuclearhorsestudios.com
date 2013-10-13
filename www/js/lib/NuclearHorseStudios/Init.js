requirejs.config({
    baseUrl: '/js/lib/NuclearHorseStudios',
    paths: {
        jquery:             '../dep/jquery',
        angular:            '../dep/angular',
        ngResource:         '../dep/angular-resource',
        ngRoute:            '../dep/angular-route',
        showdown:           '../dep/showdown',
        underscore:         '../dep/underscore.min',
        BlogDataFactory:    'Factories/BlogDataFactory',
        MarkDownFilter:     'Filters/MarkdownFilter',
        BlogPostDateFilter: 'Filters/BlogPostDateFilter',
        DbTypeFactory:      '../DbTypeFactory'
    },

    shim: {
        angular: { 
            deps: ['jquery'],
            exports: 'angular'
        },
        ngResource: {
            deps: ['angular'],
            exports: 'ngResource'
        },
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute',
        },
        showdown: {
            exports: 'Showdown'
        },
        underscore: {
            exports: '_'
        }
    },
    map: {
        '*': { 
            jquery: '../dep/jqueryPrivate',
        },

        '../dep/jqueryPrivate':  { jquery:  'jquery'  }
    }
});

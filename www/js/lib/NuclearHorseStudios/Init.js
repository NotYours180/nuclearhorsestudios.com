requirejs.config({
    baseUrl: '/js/lib/NuclearHorseStudios',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min',
        ngResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min',
        ngRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min',
        showdown: '../dep/showdown',
        underscore: '../dep/underscore.min',
        BlogDataFactory: 'Factories/BlogDataFactory',
        MarkDownFilter: 'Filters/MarkdownFilter',
        BlogPostDateFilter: 'Filters/BlogPostDateFilter',
        DbTypeFactory: '../DbTypeFactory',
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

require(['NuclearHorseStudios'], function() {});
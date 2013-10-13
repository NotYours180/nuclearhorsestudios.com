require.config({
    baseUrl: '/',
    paths: {
        jquery:              'js/lib/dep/jquery',
        angular:             'js/lib/dep/angular',
        ngResource:          'js/lib/dep/angular-resource',
        ngRoute:             'js/lib/dep/angular-route',
        showdown:            'js/lib/dep/showdown',
        underscore:          'js/lib/dep/underscore.min',
        Controllers:         'js/lib/NuclearHorseStudios/Controllers',
        BlogDataFactory:     'js/lib/NuclearHorseStudios/Factories/BlogDataFactory',
        MarkDownFilter:      'js/lib/NuclearHorseStudios/Filters/MarkdownFilter',
        BlogPostDateFilter:  'js/lib/NuclearHorseStudios/Filters/BlogPostDateFilter',
        DbTypeFactory:       'js/lib/DbTypeFactory',
        RouteProvider:       'js/lib/NuclearHorseStudios/RouteProvider',
        NuclearHorseStudios: 'js/lib/NuclearHorseStudios/NuclearHorseStudios',
        RequireConfig:       'js/lib/RequireConfig'
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
            jquery: 'js/lib/dep/jqueryPrivate',
        },

        'js/lib/dep/jqueryPrivate':  { jquery:  'jquery'  }
    }
});
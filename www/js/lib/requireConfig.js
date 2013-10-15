require.config({
    baseUrl: '/',

    paths: {
        jquery:              'js/lib/dep/jquery',
        jqueryCouch:         'js/lib/dep/jquery.couch',
        angular:             'js/lib/dep/angular',
        ngResource:          'js/lib/dep/angular-resource',
        ngRoute:             'js/lib/dep/angular-route',
        showdown:            'js/lib/dep/showdown',
        underscore:          'js/lib/dep/underscore.min',
        jasmine:             'js/lib/dep/jasmine',
        jasmineFixture:      'js/lib/dep/jasmine-fixture',
        jasmineHtml:         'js/lib/dep/jasmine-html',
        Controllers:         'js/lib/nuclearHorseStudios/controllers',
        BlogDataFactory:     'js/lib/nuclearHorseStudios/factories/blogDataFactory',
        MarkDownFilter:      'js/lib/nuclearHorseStudios/filters/markdownFilter',
        BlogPostDateFilter:  'js/lib/nuclearHorseStudios/filters/blogPostDateFilter',
        DbTypeFactory:       'js/lib/dbTypeFactory',
        RouteProvider:       'js/lib/nuclearHorseStudios/routeProvider',
        NuclearHorseStudios: 'js/lib/nuclearHorseStudios/nuclearHorseStudios',
        RequireConfig:       'js/lib/requireConfig'
    },

    shim: {
        jqueryCouch: {
            deps: ['jquery'],
            exports: 'jQuery'
        },
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
        },
        jasmine: {
            exports: 'jasmine'
        },
        jasmineHtml: {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        jasmineFixture: {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    },

    map: {
        '*': { 
            jquery: 'js/lib/dep/jqueryPrivate',
        },

        'js/lib/dep/jqueryPrivate':  { jquery:  'jquery'  }
    }
});
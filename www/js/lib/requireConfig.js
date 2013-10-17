require.config({
    baseUrl: '/',

    paths: {
        jquery:              'js/lib/dep/jquery',
        jqueryCookie:        'js/lib/dep/jquery.cookie',
        angular:             'js/lib/dep/angular',
        ngResource:          'js/lib/dep/angular-resource',
        ngRoute:             'js/lib/dep/angular-route',
        ngMock:              'js/lib/dep/angular-mock',
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
        CouchFactory:        'js/lib/nuclearHorseStudios/factories/couchFactory',
        RouteProvider:       'js/lib/nuclearHorseStudios/routeProvider',
        NuclearHorseStudios: 'js/lib/nuclearHorseStudios/nuclearHorseStudios',
        RequireConfig:       'js/lib/requireConfig'
    },

    shim: {
        angular: { 
            deps: ['jquery'],
            exports: 'angular'
        },
        ngMock: {
            deps: ['angular'],
            exports: 'inject'
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
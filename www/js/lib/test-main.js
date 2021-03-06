'use strict';
var tests = [];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

console.log(tests)

requirejs.config({
    // Karma serves files from '/base'

    baseUrl: '/base',

    paths: {
        jquery:              'js/lib/dep/jquery',
        showdown:            'js/lib/dep/showdown',
        underscore:          'js/lib/dep/underscore.min',
        ngCookies:           'js/lib/dep/angular-cookies',
        ngMock:              'js/lib/dep/angular-mocks',
        owl:                 'js/lib/dep/owl.carousel',
        MockHttp:            'js/lib/nuclearHorseStudios/tests/mockHttp',
        Controllers:         'js/lib/nuclearHorseStudios/controllers',
        BlogDataFactory:     'js/lib/nuclearHorseStudios/factories/blogDataFactory',
        MarkDownFilter:      'js/lib/nuclearHorseStudios/filters/markdownFilter',
        BlogPostDateFilter:  'js/lib/nuclearHorseStudios/filters/blogPostDateFilter',
        ngOwl:               'js/lib/nuclearHorseStudios/directives/ngOwl',
        DbTypeFactory:       'js/lib/dbTypeFactory',
        CouchFactory:        'js/lib/nuclearHorseStudios/factories/couchFactory',
        RouteProvider:       'js/lib/nuclearHorseStudios/routeProvider'
    },

    shim: {
        showdown: {
            exports: 'Showdown'
        },
        underscore: {
            exports: '_'
        }
    },


    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
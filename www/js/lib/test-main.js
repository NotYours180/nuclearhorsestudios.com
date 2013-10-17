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

    baseUrl: 'www/js/lib',

    paths: {
        jquery:              'dep/jquery',
        showdown:            'dep/showdown',
        underscore:          'dep/underscore.min',
        Controllers:         'nuclearHorseStudios/controllers',
        BlogDataFactory:     'nuclearHorseStudios/factories/blogDataFactory',
        MarkDownFilter:      'nuclearHorseStudios/filters/markdownFilter',
        BlogPostDateFilter:  'nuclearHorseStudios/filters/blogPostDateFilter',
        DbTypeFactory:       'dbTypeFactory',
        CouchFactory:        'nuclearHorseStudios/factories/couchFactory',
        RouteProvider:       'nuclearHorseStudios/routeProvider',
    },

    shim: {
        jquery: {
            exports: 'jQuery, $'
        },
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


    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
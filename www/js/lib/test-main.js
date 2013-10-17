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
        jqueryCookie:        'js/lib/dep/jquery.cookie',
        showdown:            'js/lib/dep/showdown',
        underscore:          'js/lib/dep/underscore.min',
        Controllers:         'js/lib/nuclearHorseStudios/controllers',
        BlogDataFactory:     'js/lib/nuclearHorseStudios/factories/blogDataFactory',
        MarkDownFilter:      'js/lib/nuclearHorseStudios/filters/markdownFilter',
        BlogPostDateFilter:  'js/lib/nuclearHorseStudios/filters/blogPostDateFilter',
        DbTypeFactory:       'js/lib/dbTypeFactory',
        CouchFactory:        'js/lib/nuclearHorseStudios/factories/couchFactory',
        RouteProvider:       'js/lib/nuclearHorseStudios/routeProvider',
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
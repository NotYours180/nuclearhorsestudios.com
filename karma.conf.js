// Karma configuration
// Generated on Wed Oct 16 2013 23:07:04 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'www',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'js/lib/dep/angular.js',
      'js/lib/dep/angular-mock.js',
      'js/lib/dep/angular-resource.js',
      'js/lib/dep/angular-route.js',
      'js/lib/dep/angular-cookies.js',
      'js/lib/test-main.js',
      {pattern: 'js/lib/*.js',                      included: false },
      {pattern: 'js/lib/dep/*.js',                  included: false },
      {pattern: 'js/lib/nuclearHorseStudios/*.js',  included: false },
      {pattern: 'js/lib/nuclearHorseStudios/**/*.js',  included: false },
      {pattern: 'js/**/*Spec.js',                   included: false}
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

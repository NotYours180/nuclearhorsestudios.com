(function() {
    requirejs.config({
        baseUrl: 'js/lib',
        paths: {
            jquery: "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
        },

        map: {
          '*': { jquery: 'jqueryPrivate' },

          jqueryPrivate: { jquery: 'jquery' }
        }
    });
})();

require(['jquery'], function($) {
    console.log($);
});
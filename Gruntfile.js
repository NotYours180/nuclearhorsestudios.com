module.exports = function(grunt) {
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
	        modules: [{
            name: 'NuclearHorseStudios'
          }],
          appDir: 'www',
          baseUrl: "js/lib/NuclearHorseStudios",
          mainConfigFile: "www/js/lib/NuclearHorseStudios/Init.js",
          dir: "www/build",
          generateSourceMaps: true,
          preserveLicenseComments: false,
          optimize: 'uglify2'
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);
};

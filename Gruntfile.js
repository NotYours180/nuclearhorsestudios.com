module.exports = function(grunt) {
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
	        name: 'NuclearHorseStudios',
          baseUrl: "www/js/lib/NuclearHorseStudios",
          mainConfigFile: "www/js/lib/NuclearHorseStudios/Init.js",
          out: "www/js/lib/NuclearHorseStudios/Init-production.js"
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);
};

module.exports = function(grunt)
{
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks("grunt-image-embed");
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig
    ({
        srcDir: 'www',
        distDir: 'www-build',
        tempDir: 'temp',
        jshint: {
            dist: {
                files: { src: ['www/js/lib/nuclearHorseStudios/**/*.js'] },
                options: {
                    globals: {
                        camelcase: true,
                        curly: true,
                        eqeqeq: true,
                        latedef: 'nofunc',
                        noempty: true,
                        undef: true,
                        unused: true,
                        strict: true,
                        browser: true,
                        couch: true,
                        jquery: true    
                    }
                }    
            }
        },
        less: {
            dist: {
                options: {
                    compress: true
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['app/**/*.styles.less'],
                dest: '<%= distDir %>',
                ext:'.styles.css'
            }
        },
        imageEmbed: {
            dist: {
                src: [ '<%= srcDir %>/css/nhs.css', ],
                dest: '<%= distDir %>/css/nhs.css',
                options: {
                    deleteAfterEncoding : false
                }
            }
        },
        cssmin: {
            dist: {
                src: '<%= distDir %>/css/nhs.css',
                dest: '<%= distDir %>/css/nhs.css'
            },
            jasmine: {
                src: '<%= srcDir %>/css/jasmine.css',
                dest: '<%= distDir %>/css/jasmine.css'
            }
        },
        htmlmin:{
            dist: {
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.html'],
                dest: '<%= distDir %>'
            }
        },
        pngOptimizationLevel: 7,
        imagemin: {
            png: {
                options: {
                    optimizationLevel: '<%= pngOptimizationLevel %>'
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.png'],
                dest: '<%= distDir %>'
            },
            jpg: {
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.jpg'],
                dest: '<%= distDir %>'
            }
        },
        copy: {
            scripts_to_temp: {
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['**/*.js'],
                dest: '<%= tempDir %>'
            }
        },
        clean: {
            on_start: ['<%= distDir %>'],
            on_finish: ['<%= tempDir %>']
        },
        ngmin: {
            scripts: {
                expand:true,
                cwd:'<%= tempDir %>',
                src: ['www/**/*.js'],
                dest: '<%= tempDir %>'
            }
        },
        replace: {
            dist_build_time: {
                options:{
                    variables:{
                        "build-time": (new Date()).getTime().toString()
                    },
                    prefix:'@@'
                },
                expand:true,
                cwd:'<%= distDir %>',
                src: ['**/*.*'],
                dest: '<%= distDir %>'
            }
        },
        requireJSOptimise: 'uglify2',
        requirejs: {
            compile: {
                options: {
                    keepBuildDir: true,
                    generateSourceMaps:false,
                    optimize: '<%= requireJSOptimise %>',
                    uglify2: {
                        mangle:false
                    },
                    mainConfigFile: 'www/js/lib/requireConfig.js',
                    preserveLicenseComments: false,
                    baseUrl: "<%= tempDir %>",
                    dir:'<%= distDir %>',
                    modules: [
                      {
                          name: 'NuclearHorseStudios'
                      }
                    ]
                }
            }
        },
        watch: {
            gruntFile: {
                files: ['Gruntfile.js'],
                tasks: ['watch'],
                options: {
                    nospawn: false
                }
            },
            less: {
                files: ['<%= srcDir %>/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: false
                }
            },
            scripts: {
                files: ['<%= srcDir %>/**/*.js'],
                tasks: ['setup-dev','scripts','replace:dist_build_time'],
                options: {
                    nospawn: false
                }
            },
            html: {
                files: ['<%= srcDir %>/**/*.html'],
                tasks: ['htmlmin','replace:dist_build_time'],
                options: {
                    nospawn: false
                }
            },
            png_images: {
                files: ['<%= srcDir %>/**/*.png'],
                tasks: ['setup-dev','imagemin:png'],
                options: {
                    nospawn: false
                }
            },
            jpg_images: {
                files: ['<%= srcDir %>/**/*.png'],
                tasks: ['imagemin:jpg'],
                options: {
                    nospawn: false
                }
            }
        }
    });

    grunt.registerTask('setup-dev', 'Development related settings', function()
    {
        grunt.config.set('pngOptimizationLevel', 0);
        grunt.config.set('requireJSOptimise', 'none');
    });

    grunt.registerTask('scripts', ['copy:scripts_to_temp', 'jshint', 'ngmin','requirejs']);
    grunt.registerTask('styles' , ['imageEmbed', 'cssmin', 'cssmin:jasmine', 'less']);
    grunt.registerTask('images' , ['imagemin']);
    grunt.registerTask('default', ['clean:on_start', 'images', 'scripts','styles','htmlmin','replace:dist_build_time','clean:on_finish']);
    grunt.registerTask('dev'    , ['setup-dev','default']);
};
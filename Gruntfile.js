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

    grunt.initConfig
    ({
        srcDir: 'www',
        distDir: 'www-build',
        tempDir: 'temp',
        less:{
            dist:{
                options:{
                    compress: true
                },
                expand:true,
                cwd:'<%= srcDir %>',
                src: ['app/**/*.styles.less'],
                dest: '<%= distDir %>',
                ext:'.styles.css'
            }
        },
        cssmin: {
            dist: {
                src: '<%= srcDir %>/css/nhs.css',
                dest: '<%= distDir %>/css/nhs.css'
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
                    mainConfigFile: 'www/js/lib/RequireConfig.js',
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

    grunt.registerTask('scripts', ['copy:scripts_to_temp','ngmin','requirejs']);
    grunt.registerTask('styles' , ['cssmin','less']);
    grunt.registerTask('images' , ['imagemin']);
    grunt.registerTask('default', ['clean:on_start','scripts','styles','htmlmin','images','replace:dist_build_time','clean:on_finish']);
    grunt.registerTask('dev'    , ['setup-dev','default']);
};
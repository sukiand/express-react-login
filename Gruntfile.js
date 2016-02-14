module.exports = function (grunt) {
  var config = {
    jshint: {
      options: {
        ignores: ['node_modules/**', 'public/vendor/**', '**/*.min.js'],
        jshintrc: '.jshintrc'
      },
      gruntfile: 'Gruntfile.js',
      server: ['controllers/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'app.js', 'config.js'],
      // client: 'public/js/**/*.js'
    },
    concat: {
      css: {
        // add your css files over here to concatenate all css files
        // let's save our site users some bandwith
        src: ['public/vendor/semantic/dist/semantic.min.css', 'public/css/styles.min.css','views/**/*.css','component/**/*.css'],
        dest: 'public/css/app.styles.min.css'
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      target: {
        // add your js files over here to minify them into one javascript source file
        'public/js/app.min.js': ['public/vendor/jquery/dist/jquery.min.js', 'public/vendor/semantic/dist/semantic.min.js', 'public/js/main.js']
      }
    },
    less: {
      src: {
        files: [{
          expand: true,
          cwd: 'public/less',
          src: '**/*.less',
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      src: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: '**/*.css',
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      all: {
        files: ['public/**/*', 'views/**', '!**/node_modules/**', '!public/vendor/**/*', '!**/*.min.*'],
        options: {
          livereload: 3006
        }
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: 'jshint:gruntfile'
      },
      scripts: {
        files: 'public/js/**/*.js',
        tasks: ['jshint:client', 'uglify']
      },
      server: {
        files: '<%= jshint.server %>',
        tasks: 'jshint:server'
      },
      less: {
        files: ['public/less/**/*.less'],
        tasks: ['less', 'cssmin', 'concat:css']
      }
    },
    concurrent: {
      tasks: ['watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    copy:{
      main:{
        files:[{
          expand: true,
          cwd: 'public/vendor/semantic/dist',
          src:['themes/**'],
          dest:'public/css/'
        }]
      }
    }
  };

  grunt.initConfig(config);

  // Load the tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint','uglify', 'less', 'cssmin', 'concat:css']);
  grunt.registerTask('init', ['copy']);
  grunt.registerTask('development', ['jshint','uglify', 'less', 'cssmin', 'concat:css', 'concurrent']);
};

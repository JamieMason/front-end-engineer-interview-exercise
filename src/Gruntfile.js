module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    cssmin: {
      browser: {
        files: {
          'css/styles.min.css': ['css/styles.css']
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          '../index.html': ['jade/index.jade']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'jade/*.jade',
          'css/styles.css'
        ],
        tasks: ['build'],
        options: {
          nospawn: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.task.registerTask('build', [
    'cssmin',
    'jade'
  ]);

};

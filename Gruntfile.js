module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      dist: {
        files: {
          'public/bikelab.js': ['public/js/**/*.js']
        }
      }
    },

    stylus: {
      compile: {
        options: {
          use: [ require('nib') ]
        },
        files: {
          'public/css/bikelab.css': ['public/stylus/**/*.styl']
        }
      }
    },

    watch: {
      styles: {
        files: ['public/styl/**/*.styl'],
        tasks: ['stylus']
      },
      scripts: {
        files: ['public/js/**/*.js'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', ['browserify', 'stylus', 'watch']);
};

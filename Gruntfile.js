module.exports = function(grunt) {

    grunt.initConfig({
      jasmine: {
        allTests: {
          src: 'app/*.js',
          options: {
            specs: 'spec/*Spec.js',
            template: require('grunt-template-jasmine-requirejs'),
                templateOptions: {
                    requireConfig: {
                        paths: {
                          'myApp': './app/main'
                        }
                    }
                }
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

};
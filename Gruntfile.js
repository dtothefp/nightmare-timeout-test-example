'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
 
  require('load-grunt-config')(grunt, {
      jitGrunt: {
          staticMappings: {
              mochaTest: 'grunt-mocha-test',
              jasmine_node: 'grunt-jasmine-node'
          }
      },
      init: true
  });

  grunt.registerTask('jasmine-test', function(which) {
    var task = 'jasmine_node';
    if (which) task += ':' + which;

    grunt.task.run([
      'jshint',
      task
    ]);
  });
  
  grunt.registerTask('mocha-test', function(which) {
    var task = 'mochaTest';
    if (which) task += ':' + which;

    grunt.task.run([
      'jshint',
      task
    ]);
  });

  grunt.registerTask('dev', [
    'jshint',
    'watch'
  ]);

};

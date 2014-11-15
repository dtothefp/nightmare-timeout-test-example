module.exports = {
  options: {
    showColors: true,
    includeStackTrace: false,
    projectRoot:'',
    forceExit: false,
    matchall: false,
    coffee: false,
    growl: false,
    asyncTimeout: 30000,
    verbose: false,
    consoleReporter: true,
    globals: {
      linkPath: '<%= grunt.config.get("link_path") %>'
    }
  },
  test: {
    src: ['test/jasmine/**/*.js']
  }
};

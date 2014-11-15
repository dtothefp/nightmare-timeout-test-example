module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    trailing: true,
    curly: false,
    eqeqeq: true,
    indent: 4,
    latedef: true,
    noempty: true,
    nonbsp: true,
    undef: true,
    quotmark: 'single',
    node: true
  },
  test: {
    options: {
      browser: true,
      unused: false,
      node: true,
      debug: true,
      globals: {
        jasmine: false,
        spyOn: false,
        it: false,
        console: true,
        describe: false,
        expect: false,
        beforeEach: false,
        waits: false,
        waitsFor: false,
        runs: false
      }
    },
    files: {
      src: [
        'test/**/*.js',
        'Gruntfile.js',
        'grunt/**/*.js'
      ]
    }
  }
};

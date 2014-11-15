module.exports = {
  options: {
    reporter: 'spec'
  },
  'mocha-timeout': {
    src: ['test/mocha/fail-timeout.js']
  },
  'mocha-no-timeout': {
    src: ['test/mocha/fail-no-timeout.js']
  }
};

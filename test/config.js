module.exports = function(options) {
  return {
    phantomPath: require('phantomjs').path,
    basePath: 'https://www.optimizely.com/',
    email: 'ron-jeremy@spam.com',
    password: '1800EatBurritos',
    screenshot: function(opts) {
      return options.dirname + '/screenshots/' + opts.imgName + '.jpg';
    }
  };
};

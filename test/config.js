var path = require('path');
var phantomPath = path.join(path.dirname(require('phantomjs').path), '/');

module.exports = function(options) {
  return {
    phantomPath: phantomPath,
    basePath: 'https://www.optimizely.com/',
    email: 'ron-jeremy@spam.com',
    password: '1800EatBurritos',
    screenshot: function(opts) {
      return options.dirname + '/screenshots/' + opts.imgName + '.jpg';
    }
  };
};

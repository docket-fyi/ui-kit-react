/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // This is needed to make the output use absolute path.  Otherwise when
  // we send index.html the relative path of the URL will be used when
  // trying to find main.bundle.js/etc.
  output: {
    publicPath: '/',
  },
});

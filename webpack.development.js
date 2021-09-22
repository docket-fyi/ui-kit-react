/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const WEBPACK_WATCH_POLLING = process.env.WEBPACK_WATCH_POLLING === '1';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    historyApiFallback: true, // so 404s fallback to index.html, necessary for routing
    disableHostCheck: true, // This is needed to prevent "Invalid host header" for containerized testing.
    hot: true,
    host: '0.0.0.0', // PWAs require HTTPS or localhost
    port: 8080,
  },
  output: {
    publicPath: '/',
  },
  // This is needed for docker-on-windows.
  watchOptions: !WEBPACK_WATCH_POLLING
    ? undefined
    : {
        poll: 1000,
      },
});

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    // filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css', '.scss'],
    alias: {
      '@': path.resolve('src'),
      '@sb': path.resolve('.storybook'),
      '@static': path.resolve('static'),
      '@services': path.resolve('src/services'),
      '@context': path.resolve('src/context'),
      '@hooks': path.resolve('src/hooks'),
      common: path.resolve('src/components/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'icons/',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json' },
        { from: 'static/**/*.{png,svg,ico}', flatten: true },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/service-worker.js',
    }),
    new EnvironmentPlugin(['NODE_ENV', 'BASE_API', 'PUBLIC_URL']),
  ],
};

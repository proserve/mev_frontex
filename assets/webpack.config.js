const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
    ],
  },
  entry: {
    './app.js': ['./app.js'].concat(glob.sync('./vendor/**/*.js')),
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../priv/static/js'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(svg|html|xml)$/i, use: 'raw-loader' },
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/, use: 'url-loader' },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
  ],
});

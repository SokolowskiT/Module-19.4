const path = require('path');

const entry = ['./src/index'];

const output = {
  path: path.resolve(__dirname, 'output'),
  filename: 'app.js',
};

const resolve = {
  extensions: ['.js'],
};

const scriptLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['babel-preset-env'],
    plugins: [require('babel-plugin-transform-object-rest-spread')],
  },
  test: /\.js$/,
};

module.exports = {
  devtool: 'eval',
  entry,
  output,
  resolve,
  module: { loaders: [scriptLoader] },
};

const path = require('path');
const webpack = require('webpack');
const CONFIG = {
  mode: 'development',

  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    }
  }
};

module.exports = CONFIG;
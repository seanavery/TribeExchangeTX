var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  module : {
  loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel'
     },
     { test: /\.json$/, loader: 'json' },
   ]
  }
};

module.exports = config;

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    top: path.join(__dirname, 'src/js/entrypoint/index.js')
  },
  output: {
    // sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, 'app/dest'),
    filename: '[name].bundle.js'
  },
  // devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.s?css$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      'highlight.css': path.join(__dirname, 'node_modules/highlight.js/styles/github.css'),
      'highlight.js': path.join(__dirname, 'node_modules/highlight.js/lib/index.js'),
      'material.css': path.join(__dirname, 'src', 'scss', 'application.scss'),
      'material.js': path.join(__dirname, 'node_modules/material-design-lite/material.js')
    }
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, 'node_modules', 'material-design-lite', 'src')
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true,
      preserveComments: false,
      minimize: false
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
}

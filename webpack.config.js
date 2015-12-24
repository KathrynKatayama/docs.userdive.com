var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [
      'bower_components',
      'lib_cached',
      'lib',
      'node_modules'
    ],
    alias: {
      'material.js': path.join(__dirname, 'bower_components/material-design-lite/material.js'),
      'material.css': path.join(__dirname, 'bower_components/material-design-lite/material.css')
    }
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
        ['bower.json'], ['main'])
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true,
      preserveComments: false,
      minimize: false
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
}

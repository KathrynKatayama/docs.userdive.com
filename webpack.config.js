var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    top: path.join(__dirname, 'src/js/entrypoint/top.js'),
    devguide: path.join(__dirname, 'src/js/entrypoint/devguide.js')
  },
  output: {
    // sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].bundle.js'
  },
  // devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      'highlight.css': path.join(__dirname, 'node_modules/highlight.js/styles/github.css'),
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

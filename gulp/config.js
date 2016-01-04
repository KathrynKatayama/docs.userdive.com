'use strict'
var path = require('path')
var root = path.join(__dirname, '../')

module.exports = {
  dist: path.join(root, 'dist'),
  root: root,
  templates: [
    path.join(root, 'src/content/**/**/*.jade')
  ]
}

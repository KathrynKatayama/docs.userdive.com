'use strict'
var path = require('path')
var root = path.join(__dirname, '../')

module.exports = {
  app: path.join(root, 'app'),
  dist: path.join(root, 'dist'),
  root: root,
  templates: path.join(root, 'src/template/*.jade')
}

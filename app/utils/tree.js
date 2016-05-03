var React = require('react');
var File = require('../components/File');
var Folder = require('../components/Folder');

var Tree = {
  build: function (tree) {
    var componentTree = this.buildComponents(tree);
    return componentTree;
  },
  buildComponents: function (tree) {
    return tree.map(function (node, index) {
      if (node.type === "blob") {
        return React.createElement(File, { key: index, path: node.path })
      } else if (node.type === "tree") {
        return React.createElement(Folder, { key: index, path: node.path })
      }
    })
  }
};

module.exports = Tree;
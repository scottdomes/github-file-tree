var React = require('react');
var File = require('../components/File');
var Folder = require('../components/Folder');

var Tree = {
  buildComponentTree: function (tree) {
    var componentTree = this.buildComponents(tree);
    return this.sortComponentTree(componentTree);
  },
  buildComponents: function (tree) {
    return tree.map(function (node, index) {
      if (node.type === "blob") {
        return React.createElement(File, { key: index, path: node.path });
      } else if (node.type === "tree") {
        return React.createElement(Folder, { key: index, path: node.path, children: [] });
      }
    });
  },
  sortComponentTree: function (tree) {
    highestLevelComponents = tree.filter(function (node) {
      var componentParent = this.findParent(node.props.path, tree);
      if (componentParent === undefined) {
        return true;
      } else {
        componentParent.props.children.push(node);
      }
    }.bind(this));
    return highestLevelComponents;
  },
  findParent: function (path, tree) {
    var parentPath = this.getParentPath(path);
    return tree.find(function (node) {
      return node.props.path === parentPath;
    });
  },
  getParentPath: function (path) {
    var result = path.match(/((\w|-)*\/)*/);
    return this.removeTrailingSlash(result[0]);
  },
  removeTrailingSlash: function (string) {
    return string.substring(0, string.length - 1);
  }
};

module.exports = Tree;
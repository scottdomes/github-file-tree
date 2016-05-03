var React = require('react');
var githubHelpers = require('../utils/githubHelpers');

var App = React.createClass({
  componentDidMount: function () {
    githubHelpers.getRepoTree()
      .then(function (tree) {
        this.buildTree(tree);
      }.bind(this));
  },
  buildTree: function (tree) {
    console.log(tree)
  },
  render: function () {
    return (
      <h1>Hello world!</h1>
    )
  }
});

module.exports = App;
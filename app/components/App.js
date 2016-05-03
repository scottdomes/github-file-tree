var React = require('react');
var Tree = require('../utils/tree');
var githubHelpers = require('../utils/githubHelpers');

var App = React.createClass({
  getInitialState: function () {
    return {
      tree: []
    }
  },
  componentDidMount: function () {
    githubHelpers.getRepoTree()
      .then(function (tree) {
        this.setState({
          tree: Tree.build(tree)
        });
      }.bind(this));
  },
  render: function () {
    var tree = this.state.tree
    return (
      <div>
        {tree}
      </div>
    )
  }
});

module.exports = App;
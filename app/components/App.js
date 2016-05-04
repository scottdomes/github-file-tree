require('../styles/stylesheet.css');
var React = require('react');
var Tree = require('../utils/tree');
var githubHelpers = require('../utils/githubHelpers');
var RepoForm = require('./RepoForm');

var App = React.createClass({
  getInitialState: function () {
    return {
      tree: []
    }
  },
  handleSubmitRepo: function (repoName, username) {
    githubHelpers.getRepoTree(repoName, username)
      .then(function (tree) {
        this.setState({
          tree: Tree.build(tree)
        });
      }.bind(this));
  },
  render: function () {
    var tree = this.state.tree;
    return (
      <div>
        <h1>Make Github Great Again</h1>
        <RepoForm
          onSubmit={this.handleSubmitRepo}/>
        <div id="tree">
          {tree}
        </div>
      </div>
    )
  }
});

module.exports = App;
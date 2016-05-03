require('../styles/stylesheet.css');
var React = require('react');
var Tree = require('../utils/tree');
var githubHelpers = require('../utils/githubHelpers');
var RepoForm = require('./RepoForm')

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
    var tree = this.state.tree
    return (
      <div>
        <RepoForm
          onSubmit={this.handleSubmitRepo}/>
        {tree}
      </div>
    )
  }
});

module.exports = App;
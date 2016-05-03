var React = require('react');
var githubHelpers = require('../utils/githubHelpers');

var App = React.createClass({
  componentDidMount: function () {
    console.log(githubHelpers.getRepoTree());
  },
  render: function () {
    return (
      <h1>Hello world!</h1>
    )
  }
});

module.exports = App;
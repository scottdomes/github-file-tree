var React = require('react');

var Folder = React.createClass({
  render: function () {
    return (
      <h1>I'm a Folder with the path {this.props.path}</h1>
    )
  }
});

module.exports = Folder;
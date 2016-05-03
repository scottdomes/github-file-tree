var React = require('react');

var File = React.createClass({
  render: function () {
    return (
      <h1>I'm a file with the path {this.props.path}</h1>
    )
  }
});

module.exports = File;
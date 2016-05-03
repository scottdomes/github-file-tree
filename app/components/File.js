var React = require('react');

var File = React.createClass({
  render: function () {
    return (
      <p>I'm a file with the path {this.props.path}</p>
    )
  }
});

module.exports = File;
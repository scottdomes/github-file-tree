var React = require('react');

var File = React.createClass({
  render: function () {
    return (
      <p>-{this.props.path}</p>
    )
  }
});

module.exports = File;
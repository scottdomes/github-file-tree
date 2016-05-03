var React = require('react');

var Folder = React.createClass({
  render: function () {
    return (
      <div>
        <h1>I'm a Folder with the path {this.props.path}</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Folder;
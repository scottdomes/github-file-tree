var React = require('react');

var Folder = React.createClass({
  getInitialState: function () {
    return {
      expanded: false
    }
  },
  handleClick: function (e) {
    var expandedBoolean = this.state.expanded ? false : true;
    e.stopPropagation();
    this.setState({
      expanded: expandedBoolean
    });
  },
  render: function () {
    var expandedChildren = this.state.expanded ? {"display": "block"} : {"display": "none"};
    return (
      <div className="folder">
        <h1 onClick={this.handleClick}>I'm a Folder with the path {this.props.path}</h1>
        <div 
          className="folder-children"
          style={expandedChildren}>
            {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Folder;
var React = require('react');

var RepoForm = React.createClass({
  getInitialState: function () {
    return {
      repoInput: '',
      usernameInput: ''
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit(this.state.repoInput, this.state.usernameInput);
  },
  handleUsernameInputChange: function (e) {
    this.setState({
      usernameInput: e.target.value
    })
  },
  handleRepoInputChange: function (e) {
    this.setState({
      repoInput: e.target.value
    })
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter username"
          onChange={this.handleUsernameInputChange}
          value={this.state.usernameInput}/>
        <input 
          type="text" 
          placeholder="Enter repo name"
          onChange={this.handleRepoInputChange}
          value={this.state.repoInput}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
});

module.exports = RepoForm;
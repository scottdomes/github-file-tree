var axios = require('axios');
var API = require('./api')

var id = API.id;
var sec = API.sec;
var param = "?client_id=" + id + "&client_secret=" + sec;

function getRepoInfo (repoName, username) {
  return axios.get('https://api.github.com/repos/' + username + '/' + repoName + '/commits/master' + param)
}

function getTree (repoName, username, sha) {
  return axios.get('https://api.github.com/repos/' + username + '/' + repoName + '/git/trees/' + sha + param + '&recursive=1')
}

var helpers = {
  getRepoTree: function (repoName, username) {
    return getRepoInfo(repoName, username).then(function (response) {
      var sha = response.data.sha;
      return getTree(repoName, username, sha).then(function (response) {
        return response.data.tree;
      });
    });
  }
};

module.exports = helpers;
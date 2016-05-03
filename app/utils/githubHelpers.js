var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getRepoInfo (repo) {
  return axios.get('https://api.github.com/repos/scottdomes/final-project-frontend/commits/master')
}

function getTree (sha) {
  return axios.get('https://api.github.com/repos/scottdomes/final-project-frontend/git/trees/' + sha + '?recursive=1')
}

var helpers = {
  getRepoTree: function () {
    return getRepoInfo().then(function (response) {
      var sha = response.data.sha;
      getTree(sha).then(function (response) {
        console.log(response);
      });
    });
  }
};

module.exports = helpers;
var axios = require('axios');
var API = require('./api')

var id = API.id;
var sec = API.sec;
var param = "?client_id=" + id + "&client_secret=" + sec;

function getRepoInfo (repo) {
  return axios.get('https://api.github.com/repos/scottdomes/final-project-frontend/commits/master' + param)
}

function getTree (sha) {
  return axios.get('https://api.github.com/repos/scottdomes/final-project-frontend/git/trees/' + sha + param + '&recursive=1')
}

function mapTree (treeArray) {
  return treeArray.map(function (node) {
    if (node.type === "tree") {
      return {
          path: node.path,
          children: []
        }
    } else {
      return {
        path: node.path
      }
    }
  });
}

function findParent (path, treeArray) {
  console.log(path);
  var parentPath = path.match(/(\w*\/)*/);
  var parentPathClean = parentPath[0].substring(0, parentPath[0].length - 1);
  var parent = treeArray.find(function (node) {
    return node.path === parentPathClean;
  });
  console.log(parent);
}

// (\w*\/){2}\w*\.

function findChildren (treeArray, path) {
  var results = [];
  results = treeArray.filter(function (node) {
    return node.path.match(RegExp(path + "\/\w*\.\w*"));
  })
  return results;
}

var helpers = {
  getRepoTree: function () {
    return getRepoInfo().then(function (response) {
      var sha = response.data.sha;
      return getTree(sha).then(function (response) {
        return response.data.tree;
      });
    });
  }
};

module.exports = helpers;
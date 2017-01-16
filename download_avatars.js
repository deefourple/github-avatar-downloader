var request = require('request');
var GITHUB_USER = "deefourple";
var GITHUB_TOKEN = "dd92027e4fe310106d942c4f3dc21f9c8885751f";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
}

getRepoContributors("deefourple", "github-avatar-downloader", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
var request = require('request');
var fs = require('fs');
var https = require('https');
var GITHUB_USER = "deefourple";
var GITHUB_TOKEN = "dd92027e4fe310106d942c4f3dc21f9c8885751f";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = ('https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors')
  var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};
  request.get(options, function(error, response, body) {
      if (error) {
        return error;
      }
      if (response.statusCode === 200) {
        var data = JSON.parse(body);
        cb(error, data);
      }
    });
}

getRepoContributors("jquery", "jquery", function(err,result) {
  if (err) {
    console.log("Errors:", err);
    return err;
  }
  for (var i = 0; i < result.length; i++ ){
    console.log(result[i].avatar_url)
  }
});

function downloadImageByURL(url, filePath) {
   request.get(url)
  .pipe(fs.createWriteStream(filePath))
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "/vagrant/github-avatar-downloader/avatar/kvirani.jpg")

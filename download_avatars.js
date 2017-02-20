const request = require('request');
const fs = require('fs');
const GITHUB_USER = "deefourple";

//Lesson: process.argv is the array of each instance input in Node.js
let arg = process.argv;
require('dotenv').config()
GITHUB_TOKEN: process.env.TOKEN

console.log('Welcome to the GitHub Avatar Downloader!');

//callback function to download all urls found during the for loop
downloadImageByURL = (url, filePath) => {
   request.get(url)
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors = (repoOwner, repoName, cb) => {
  //path to user's repository
  let` requestURL = ('https://'+ GITHUB_USER + ':' + process.env.GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors')
  let` options = {
  url: requestURL,
  headers: {
    'User-Agent': 'request'
  }
};

  //if the first argument is undefined OR there are more than two arguments { throw error }
  if (arg[2] === undefined || arg.length > 4) {
    throw "Input must be two arguments";
  } else {
    request.get(options, function(error, response, body) {
      if (error) {
        return error;
      }
      if (response.statusCode === 200) {
        //parse our data to JSON
        let data = JSON.parse(body);
        cb(error, data);
      }
    });
  }
}
  //function to iterate through urls
  getRepoContributors(arg[2], arg[3], function(err,result) {
    if (err) {
      console.log("Errors:", err);
      return err;
    }
    for (let i = 0; i < result.length; i++ ){
      downloadImageByURL(result[i].avatar_url, "./avatar/" + result[i].login + ".jpg")
    };
  });
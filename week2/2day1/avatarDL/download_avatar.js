// http://api.github.com/repos/chrislgarry/Apollo-11/contributors
// I NEED avatar_url from that object
//


var request = require("request");
var fs = require("fs");
var chalk = require('chalk');
var newModule = require('./my-module')

function getDLRepoContribz(repoOwner, repoName, callback) {

    var target = `https://api.github.com/repos/${repoName}/${repoOwner}/contributors`
    var requestData = {
        url: target,
        auth: {
            bearer: '368cf9c497cf9c8384b0ce5a5a29656c9458e7ba',
        },
        headers: {
            'User-Agent': 'request or whatever',
        }
    }

    console.log(chalk.yellow("Owner: " + repoName))
    console.log(chalk.red("Repo: " + repoOwner))
    console.log(chalk.blue("target: " + target))

    request.get(requestData, (err, response, body) => {
            if (err) {
                throw err;
            } else {

                var data = JSON.parse(body);

                for (var i = 0; i <= data.length - 1; i++) {
                    callback(` ${chalk.red(data[i].login)}  ${chalk.blue(data[i].avatar_url)}`);
                    var url = data[i].avatar_url;
  // url of image is saves as url
                    var filename = data[i].login + ".png"
// name saved to filename
                    var download = function(url, filename, callback2) {
                        request.head(url, function(err, res, body) {
                                request(url).pipe(fs.createWriteStream(filename)).on('close', callback2);
                            });

                        }
                        download(url, filename, function() {
                            console.log("done")
                        });
                    } // end of for loop
                } // end of else (after if error)
            });  //// end of request.get

    } /// end of getDLRepoContribz function

getDLRepoContribz(process.argv[2], process.argv[3], console.log);





    // HTTP AUthoentication (bearer token?)

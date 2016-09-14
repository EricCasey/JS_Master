//TESTED USING http://api.github.com/repos/chrislgarry/Apollo-11/contributors

// run --> $ node download_avatar.js Apollo-11 chrislgarry

require('dotenv').config() //check .env file
var request = require('request'), //  request library
    fs = require('fs'), //  file system library
    chalk = require('chalk'), // for coloring results
    clear = require('clear'), // this clears the screen
    newModule = require('./my-module'); // access with newModule.key

function getDLRepoContribz(repoOwner, repoName, callback) {
    clear(); // get ready for a show

    var target = `https://api.github.com/repos/${repoName}/${repoOwner}/contributors`;
    var requestData = {
        url: target,
        auth: {
            bearer: process.env.BEARER_TOKEN, // token saved in newModule (my-module.js)
        },
        headers: {
            'User-Agent': 'Eric goddamn Casey',
        };
    };

    var fileCount = 0;

    console.log(chalk.yellow(`1 CRAFTING REQUEST!\n*`));

    request.get(requestData, (err, response, body) => {

        var data = JSON.parse(body); // parses JSON data for formatting / readability

        if (response.statusCode === 401) {
            throw Error("ACCESS DENIED!\n");
        } else if (!fs.existsSync(newModule.env)) {
            throw Error(`YOU DONT HAVE A .env FILE!`);
        };

        if (process.argv.length < 2 || process.argv[3] === undefined) {
            throw Error(chalk.red(`TOO FEW ARGUMENTS \:\(\nTry putting in more arguments\n$ node download_avatar.js <USERNAME> <REPO>`));
        } else if (process.argv[4] !== undefined) {
            throw Error(chalk.red(`TOO MANY ARGUMENTS \:\(\nTry putting in fewer arguments\n$ node download_avatar.js <USERNAME> <REPO>`));
        } else if (data.message == 'Not Found') {
            throw Error(chalk.red(`Repo or Owner Does Not Exist \:\(\n$ node download_avatar.js <USERNAME> <REPO>`));
        } else {
            for (var i = 0; i <= data.length - 1; i++) {
                if (i == data.length - 1) {
                    callback(chalk.yellow(`2 PROFILE IMAGE URLs ACQUIRED!\n**`)); // yay!
                }
                var url = data[i].avatar_url; // url of image is saves as url
                var filename = `${data[i].login}.png` // name saved to filename
                var username = data[i].login // saves username to username
                newModule.download(url, filename, function() {
                        fileCount++;
                        console.log(`4.${fileCount} -- ${Math.round((fileCount / data.length) * 100)}%`);
                    }) // calls the download function from the module
            }; // end of for loop url bulder loop
        }; // end of else
        console.log(chalk.yellow(`3 DOWNLOADING ${data.length} IMAGES!\n***\n ${chalk.red('#')} --- ${chalk.red('Completeness')}`))
    }); // end of request.get
}; // end of getDLRepoContribz

getDLRepoContribz(process.argv[2], process.argv[3], console.log);


// NEXT STEPS <--
//> Add Mocha & Chai tests
//> Align %downloaded values
//> Add something that counts the file size

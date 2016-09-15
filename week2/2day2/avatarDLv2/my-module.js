var fs = require('fs'),
    request = require('request'),
    chalk = require('chalk'); //for coloring results

module.exports = {
    env : '.env',
    directory: 'avatars',
    download: function(url, filename, cb2) { // it won't let me declare this function with => for some reason.

        if (!fs.existsSync(this.directory)) {
            fs.mkdirSync(this.directory);
            console.log(chalk.yellow(`1.1 AVATARS DIRECTORY CREATED!\n*`));
         }

         request.head(url, function(err, res, body) {
             request(url).pipe(fs.createWriteStream(`avatars/${filename}`)).on('close', cb2);

         });
    }
}


// NEXT STEPS <--
//> Add file system i.e. avatars/username/repo/file.png
//>

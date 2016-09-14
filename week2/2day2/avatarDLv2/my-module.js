var fs = require('fs'),
    request = require('request'),
    chalk = require('chalk'); //for coloring results

module.exports = {
    env : '.env',
    directory: 'avatars',
    download: function(url, filename, callback2) {

        if (!fs.existsSync(this.directory)) {
            fs.mkdirSync(this.directory);
            console.log(chalk.yellow(`1.1 AVATARS DIRECTORY CREATED!\n*`));
         }

         request.head(url, function(err, res, body) {
             request(url).pipe(fs.createWriteStream(`avatars/${filename}`)).on('close', callback2);

         });
    }
}

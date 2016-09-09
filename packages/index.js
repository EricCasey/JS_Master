var chalk = require("chalk");

var message = chalk.blue.bgGreen.underline("Goodbye ") + chalk.yellow.bgRed.bold.underline("World");
console.log(message);

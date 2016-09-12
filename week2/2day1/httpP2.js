var request = require("request");



function printExampleHTML(callback) {

request("http://www.casey.works", function(err, response, body) {
  if (err) { throw err; }

console.log(body)

});

}

printExampleHTML();

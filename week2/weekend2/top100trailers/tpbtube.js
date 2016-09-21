

const YouTube = require('youtube-node');
const PirateBay = require('thepiratebay');
const chalk = require('chalk');

var youTube = new YouTube();

youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');


var movie = "";



PirateBay.topTorrents(201)
.then(results => {
//console.log(results)

  var nameDatabase = [ 0 ];
  for (var i = 0 ; i <= 10; i += 1) {
    // results.length - 1
  movie = results[i].name;
  console.log(chalk.yellow(/.*(?=20)/ig.exec(movie)))
// --------------------------remove all after 20
  movie = /.*(?=20)/ig.exec(movie);
  var trailerQuery = `${movie[0]} trailer`
  console.log(trailerQuery);
  nameDatabase.push( { name : movie[0], query : trailerQuery } )

} // end of for loop
console.log(nameDatabase);
})
.catch(err => {
  console.log(err)
})

console.log(nameDatabase)
// for ()
// youTube.search('darkness trailer', 1, function(error, result) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     console.log(JSON.stringify(result, null, 2));
//   }
// });




// PirateBay.search('Suicide', {
//     category: 201
// }).then(function(results) {
//     console.log(results)
// }).catch(function(err) {
//     console.log(err)
// });

//PirateBay.topTorrents(201, (results) => {console.log(results)})

//PirateBay.topTorrents()

require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require ('node-spotify-api');
var userChoice = process.argv;
// We grab the fs package to handle read/write
var fs = require("fs");




// require("dotenv").config();

if (userChoice[2] === "my-tweets") {
	myTweets()
}
else if (userChoice[2] === "spotify-this-song") {
	mySpotify()
}
else if (userChoice[2] === "movie-this") {
	myMovie()
}
// else if (userChoice[2] === "do-what-it-says") {
// 	myDoWhatItSays()
// }
else{
	console.log("That's not a acceptable value");
}


function myTweets() {

	var client = new Twitter(keys.twitter);
	var userResponse = "";


	// var twitterUser = process.argv[3];
	// if (!twitterUser) {
	// 	twitterUser = "@ricpicolli";
	// }

	if (userChoice[3] === "" || userChoice[3] === undefined) {
		console.log("If you won't say anyone, then check these tweets")
		userResponse = "StephenCurry30";
	}
	else if(userChoice.length-3>1) {
		var storage =[]

		for (i=3; i<userChoice.length; i++) {
			storage.push(userChoice[i])
		}
		userResponse = storage.join("");
	}
	else{
		userResponse = userChoice[3]
	}
	 
	var params = {screen_name: userResponse};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
		for(var i = 0; i < 20; i++) {
			console.log("\n=========================================");
			console.log(tweets[i].created_at);
			console.log(tweets[i].text);
			console.log("=========================================");
			
					}
				}
				else {
					console.log("Error :" + error);
					return;
				}

			});
		}



function mySpotify() {

// var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
// var userResponse = "";



var songName = process.argv[3];
	if(!songName){
		songName = "The Sign by Ace of Base.";
		}


// var userChoice = process.argv[3];
// 	if(!userChoice){
// 		userChoice = "The Sign by Ace of Base.";
// 		}

// 	else if(userChoice.length-3>1) {
// 		var storage =[]

// 		for (i=3; i<userChoice.length; i++) {
// 			storage.push(userChoice[i])
// 		}
// 		userResponse = storage.join("");
// 	}
// 	else{
// 		userResponse = userChoice[3]
// 	}

// choice = userChoice;



choice = songName;
spotify.search({ type: 'track', query: choice }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  for(i = 0; i<data.tracks.items.length; i++) {
  	 console.log(data.tracks.items[i].artists[0].name);
     console.log(data.tracks.items[i].name);
     console.log(data.tracks.items[i].external_urls.spotify);
     console.log(data.tracks.items[i].album.name);
     console.log("__________________________________________________")
 }
 

});

}

function myMovie() {

var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
// var movieName = process.argv[3];
if (userChoice[3] === "" || userChoice[3] === undefined) {
		console.log("If you won't say any movie, then check this one")
		movieName = "Harry Potter";
	}
	else{
		movieName = userChoice[3]
	}


// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

// Run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

  	// Parse the body of the site and recover just the information that I need
	var result = JSON.parse(body)
  		console.log("Movie title: " + result.Title);
        console.log("Release Year: " + result.Year);
       	console.log("imdb rating :" + result.imdbRating)
        console.log("country: " + result.Country);
        console.log("Language: " + result.Language);
        console.log("Rating: " + result.Rated);
        console.log("plot: " + result.Plot);
        console.log("Actors: " + result.Actors);
  }
});


}













// inquirer.prompt([
// 	{
// 	type: "list",
// 	message: "choose one of this command below to start:"
// 	choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
// 	name: "choices"

// 	}

// ])


// var request = require("request");

// var nodeArgss = process.argv;

// var movieName = "";

// for (i = 2; i < nodeAr.length; i++) {

// 	arr.push(process.argv[i]);
// }

// var
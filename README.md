## LIRI Node App


### Introduction

* I created a node.js app called LIRI, that stands for Language Interpretation and Recognition Interface.
* It must be ran in the Terminal/Git.
* To make LIRI work, you need to run the commands into the command line.
	1. my-tweets
	2. spotify-this-song
	3. movie-this
	4. do-what-it-says

* Type in node liri.js to get the instructions on how to enter the commands correctly.

* Example for the main page of LIRI

```
node liri.js
```

![Alt text](/images/img1.png?raw=true)

* Example for twitter

```
node liri.js my-tweets
```

![Alt text](/images/img2.png?raw=true)

* Example for spotify

```
node liri.js spotify-this-song '<song name here>'
```

![Alt text](/images/img4.png?raw=true)

* shows the following information about the song in the terminal
	1. artist(s)
	2. song name
	3. preview link of the song from spotify
	4. album that the song is a part of

* Example for movie
```
node liri.js movie-this '<movie name here>'
```

![Alt text](/images/img3.png?raw=true)


* this would output the following information to the terminal:
	1. Title
	2. Year
	3. IMDB Rating
	4. Country
	5. Language
	6. Plot
	7. Actors
	8. Rotten Tomatoes Rating
	9. Actors


* Example for do what it says
```
node liri.js do-what-it-says
```

![Alt text](/images/img5.png?raw=true)


* These are the npm packages I used and are needed to run the app
	1. fs package in node
	2. [twitter](https://www.npmjs.com/package/twitter)
	3. [spotify](https://www.npmjs.com/package/spotify)
	4. [request](https://www.npmjs.com/package/request)

* to install these npm packages run these commands one at a time.
```
npm install twitter
npm install spotify
npm install request
```

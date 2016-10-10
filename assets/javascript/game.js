// Variables to be used
var wins = 0;

var wordOptions = ["witch",
					"potion",
					"werewolf",
					"dracula",
					"mummy",
					"ghost"];

var imageOptions = ["assets/images/WickedWitch.jpg",
					"assets/images/Potion.png",
					"assets/images/werewolf.jpg",
					"assets/images/dracula-lugosi.jpg",
					"assets/images/hotel-transylvania-2012-mummy.jpg",
					"assets/images/ghost.jpg"];

var currentImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];

var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

var guesses = 10;

var incorrectLetters = [];

var currentWord = [];


// Creates the blanks shown on screen to represent the word initially
for (var i = 0; i < randomWord.length; i++) {
	currentWord.push("_");
}

// Takes out the commas between the letters
currentWordHTML = currentWord.join(" ");

// Links id code from HTML doc with JavaScript so it can be displayed on screen
document.querySelector("#currentWord").innerHTML = currentWordHTML;



//This captures key user selects
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();





// Checks to see if key selected matches letter in random word
if (randomWord.indexOf(userGuess) >= 0) {
	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === userGuess) {
			currentWord[i] = userGuess;
		}
	}

// Displays correct letter onscreen, in correct position...in upper case
currentWordHTML = currentWord.join(" ");
document.querySelector("#currentWord").innerHTML = currentWordHTML.toUpperCase();
}

// Checks if letter has already been selected. Will not count against #guesses		
else if (incorrectLetters.indexOf(userGuess) >=0) {
	console.log("Already Guessed");
}

// Letter not part of random word, deducts 1 from number of guesses		
else {
	guesses--;
	document.querySelector("#numGuessesLeft").innerHTML = guesses;

// Adds incorrect guess to Letters Already Guessed List, adds space between letters in list and makes upper case	
incorrectLetters.push(userGuess);
incorrectLettersHTML = incorrectLetters.join(" ");
document.querySelector("#incorrectLetters").innerHTML = incorrectLettersHTML.toUpperCase();
}




// All Letters guessed correctly, adds to # wins
if (currentWord.indexOf("_") < 0) {
	wins++;

	document.getElementById("gameImage").src = currentImage;

	// Resets initial values...all except wins		
	randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	guesses = 10;
	incorrectLetters = [];
	currentWord = [];
		// Creates the blanks shown on screen to represent the word initially
		for (var i = 0; i < randomWord.length; i++) {
			currentWord.push("_");
		}
		// Takes out the commas between the letters
			currentWordHTML = currentWord.join(" ");

		// Links id code from HTML doc with JavaScript so it can be displayed on screen
		document.querySelector("#currentWord").innerHTML = currentWordHTML;
		document.querySelector("#numGuessesLeft").innerHTML = guesses;
		document.querySelector("#numWins").innerHTML = wins;
}




// Didn't get entire word, guesses remaining equal zero		
else if (guesses === 0) {
	;
// Resets initial values...all except wins		
randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
guesses = 10;
incorrectLetters = [];
currentWord = [];
// Creates the blanks shown on screen to represent the word initially
for (var i = 0; i < randomWord.length; i++) {
	currentWord.push("_");
}
// Takes out the commas between the letters
currentWordHTML = currentWord.join(" ");

// Links id code from HTML doc with JavaScript so it can be displayed on screen
document.querySelector("#currentWord").innerHTML = currentWordHTML;
document.querySelector("#numGuessesLeft").innerHTML = guesses;
document.querySelector("#numWins").innerHTML = wins;
}
}


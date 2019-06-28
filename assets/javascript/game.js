var alphabet = 
'abcdefghijklmnopqrstuvwxyz'.split("")

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = 0;
var losses = 0;
var numUserGuesses = 9;
var guessesLeft = 9;
var guessedLetters = []

var directionsText = document.getElementById('directions-text');
var $wins = document.getElementById('wins-text');
var $losses = document.getElementById('losses-text');
var $guessesLeft = document.getElementById('guesses-left');
var $guessedLetters = document.getElementById('guesses-made');

function reset() {
    guessesLeft= 9
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessedLetters.length = 0
}

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase()
    
    // console.log(`USER GUESS ${userGuess}`);
    // console.log(`COMPUTER GUESS ${computerGuess}`);

    guessesLeft--

    // console.log(guessesLeft)

    guessedLetters.push(userGuess)
    
    $guessedLetters.innerHTML = guessedLetters
    // console.log(guessedLetters)

    if (userGuess === computerGuess) {
        wins++
        reset()
    }
    if (guessesLeft === 0) {
        losses++ 
        reset()
    }

    directionsText.textContent = '';
    $wins.textContent = wins;
    $losses.textContent = losses;
    $guessesLeft.textContent =  guessesLeft
    
};






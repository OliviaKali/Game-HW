// var computerChoices = ["a", "b","c","d","e","f","g",
// "h","i","j","k","l","m","n","o","p","q","r","s","t","u",
// "v","w","x","y","z"];

// var computerChoices = ["hello", "world", "earth", "sky"]

var alphabet = 
'abcdefghijklmnopqrstuvwxyz'.split("")

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

var wins = 0;
var losses = 0;
var numUserGuesses = 9;
var guessesLeft = 9;
var guessedLetters = []

var directionsText = document.getElementById('directions-text');
var userChoiceText = document.getElementById('userchoice-text');
// var computerChoiceText = document.getElementById('computerchoice-text');
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
    

    console.log(`USER GUESS ${userGuess}`);
    console.log(`COMPUTER GUESS ${computerGuess}`);


    guessesLeft--

    console.log(guessesLeft)

    // push letters guessed into an array to show user

    guessedLetters.push(userGuess)
    
    // write guessedLetters array to HTML 

    $guessedLetters.innerHTML = guessedLetters
    console.log(guessedLetters)

    if (userGuess === computerGuess) {
        wins++

        // update wins html content with wins variable content

        reset()
    }

    if (guessesLeft === 0) {
        losses++ 

        // update losses html content with losses variable content

        reset()
    }


}







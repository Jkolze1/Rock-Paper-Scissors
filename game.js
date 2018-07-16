// Vars
var computerChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function runs when key is pressed
document.onkeyup = function(event) {

// Else if statements
if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
if ((userGuess === "r") && (computerGuess === "s")) {
wins++;
} else if ((userGuess === "r") && (computerGuess === "p")) {
losses++;
 } else if ((userGuess === "s") && (computerGuess === "r")) {
losses++;
} else if ((userGuess === "s") && (computerGuess === "p")) {
wins++;
} else if ((userGuess === "p") && (computerGuess === "r")) {
wins++;
} else if ((userGuess === "p") && (computerGuess === "s")) {
losses++;
} else if (userGuess === computerGuess) {
 ties++;
}

// Holds HTML
var html =
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>ties: " + ties + "</p>";

// Matches DIV
document.querySelector("#game").innerHTML = html;
}
};


 //Variables------------------------------------------------------------------------------

        //array of letters to choose from
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        //the counter starts at 0 for wins & losses
        var wins = 0;
        var losses = 0;

        //the amount of guesses we have
        var guesses = 9;

        //our guess
        var ourGuess;
        var randomLetter = letters[Math.floor(Math.random()*letters.length)];


        //Functions------------------------------------------------------------------------------
        
        //key up to start a game
        document.onkeyup = function (event) {
            var userGuess = event.key;

            //function to update wins
            function updateWins() {
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
            }

            //updates losses
            function updateLosses() {
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
            }

            //update guesses
            function updateGuesses() {
                document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guesses;
            }

            function myGuess() {
                if (userGuess === randomLetter){
                    alert("You win!")
                    wins++
                    updateWins();
                }
                else{
                    document.querySelector("#guessesSoFar").innerHTML = "Guesses so far: " + userGuess;
                    guesses--;
                    updateGuesses();
                    if(guesses ===0)
                    {
                        alert("you lose!");
                        losses++
                        updateLosses();
                        guesses = 9;
                        updateGuesses();
                    }
                }
            }

            //check guesses so far
            function guessesSoFar() {

            }



            //Game content----------------------------------------------------------------------------
        }
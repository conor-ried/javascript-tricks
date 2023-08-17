function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let hasWon = false;
    let guesses = 0;
  
    return function(guess) {
      if (hasWon) {
        return "The game is over, you already won!";
      }
  
      guesses++;
  
      if (guess === secretNumber) {
        hasWon = true;
        return `You win! You found ${guess} in ${guesses} guess${guesses === 1 ? '' : 'es'}.`;
      } else if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
module.exports = { guessingGame };

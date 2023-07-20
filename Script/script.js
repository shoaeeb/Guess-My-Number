let querySelector = (selector) => document.querySelector(selector);

$ = {};

$$ = {};
//for again button
$.playAgain = querySelector('[data-id="play-again"]');
//for middle box number
$.rightNumber = querySelector('[data-id="right-number"]');
//for entering the number
$.numberChecker = querySelector('[data-id="NumberChecker"]');
//for check button
$.checkButton = querySelector('[data-id="check-button"]');
//for message
$.message = querySelector('[data-id="message"]');
//for displaying the score
$$.displayScore = querySelector('[data-id="display-score"]');
//for displaying highest score
$$.displayHighScore = querySelector('[data-id="display-high-score"]');

//main logic goes here
window.addEventListener("load", (event) => {
  let score = 20;
  let highestScoreArray = [];
  let guessNumber;
  //first load the number to guess
  let randomNumber = function () {
    return Math.floor(Math.random() * (20 - 1) + 1);
  };
  //for reset the gamee
  let playAgain = () => {
    guessNumber = randomNumber();
    $.message.innerHTML = "Start guessing...";
    $.rightNumber.innerHTML = "?";
    $$.displayScore.innerHTML = 20;
    score = 20;
    document.body.style.backgroundColor = "black";
  };
  0;
  //for first to load the guessed number
  playAgain();

  //get the input from the user
  $.checkButton.addEventListener("click", (event) => {
    if (document.body.style.backgroundColor == "blue") {
      alert(
        "You already know the answer! Click on Play again or reload the page"
      );
    }
    let calculateHighestScore = () => {
      let max = highestScoreArray[0];
      highestScoreArray.forEach((ele) => {
        if (ele > max) {
          max = ele;
        }
      });
      return max;
    };
    let inputNumber = Number($.numberChecker.value);
    //then check the user input number is close or not
    //if it close to the guessed number display too close
    //if the user input number is far from the guess number
    //then display too far
    //if it equals then display that the number you guessed is correct
    //and change the background color of the page to green
    let string = checkNumber(inputNumber);
    console.log(`number to guess is ${guessNumber}`);
    //console.log(string);
    $.message.innerHTML = string;
    if (string === "Correct!") {
      document.body.style.backgroundColor = "blue";
      $.rightNumber.innerHTML = guessNumber;
      highestScoreArray.push(score);
      let highestScore = calculateHighestScore();
      $$.displayHighScore.innerHTML = highestScore;
    } else {
      score -= 1;
      $$.displayScore.innerHTML = score;
    }
    //console.log(typeof guessNumber, typeof inputNumber);
  });
  let checkNumber = (inputNumber) =>
    inputNumber > guessNumber
      ? "Too High!"
      : inputNumber === guessNumber
      ? "Correct!"
      : "Too Low!";
  let resetGame = () => {
    playAgain();
  };
  $.playAgain.addEventListener("click", resetGame);

  //calculate the highest score
});

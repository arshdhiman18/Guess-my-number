'use strict';

let RandomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(RandomNumber);
const showNumber = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const showScore = document.querySelector('.score');
const body = document.querySelector('body');
const Showhighscore = document.querySelector('.highscore');
const message = document.querySelector('.message');
let score = 20;
let highscore = 0;
let gameplaying = true;

function showMessage() {
  if (gameplaying) {
    // selecting message element ot change its content

    const inputValue = Number(document.querySelector('.guess').value);

    //if score is below 0 game should stop
    if (score <= 0) {
      message.textContent = 'YOU LOSE PLAY AGAIN';
      gameplaying = false;
    } else if (inputValue > 20 || inputValue < 0) {
      message.textContent = 'Please type a number between 0-20';
    }
    // if input number is greater than random number
    else if (inputValue > RandomNumber) {
      message.textContent = ' too high';
      score--;
      showScore.textContent = score;
    }
    // if input number is less than random number
    else if (inputValue < RandomNumber) {
      message.textContent = 'too low';
      score--;
      showScore.textContent = score;
    }
    //if input number is equal to random number
    else if (inputValue === RandomNumber) {
      message.textContent = 'correct answer';
      body.style.backgroundColor = 'blue';
      showNumber.textContent = RandomNumber;
      showNumber.style.width = '30rem';
      showScore.textContent = score;
      if (score > highscore) {
        Showhighscore.textContent = score;
      }
    }
    //if there is no input value
    else if (!inputValue) message.textContent = 'please enter a number';
  }
}
checkButton.addEventListener('click', showMessage);

const againButton = document.querySelector('.again');

function resetGame() {
  gameplaying = true;
  message.textContent = 'Start guessing...';
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  showScore.textContent = '20';
  body.style.background = '#222';
  document.querySelector('.guess').value = '';
  showNumber.textContent = '?';
  score = 20;
}

againButton.addEventListener('click', resetGame);

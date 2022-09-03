'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const labelScore = document.querySelector('.score');


const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

number.textContent = secretNumber;

check.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        message.textContent = 'No Number';

        } else if (guess == secretNumber) {
        message.textContent = 'Correct Number';

    } else if (guess > secretNumber) {
        
            if (score > 1) {
                message.textContent = 'Too High!';
                score--;
                labelScore.textContent = score;

            } else {
                message.textContent = 'You Lose The Game!';
                labelScore.textContent = 0;
            }
        
    } else if (guess < secretNumber) {
        
            if (score > 1) {
                message.textContent = 'Too Low!';
                score--;
                labelScore.textContent = score;

            } else {
                message.textContent = 'You Lose The Game!';
                labelScore.textContent = 0;
        }
    }
})
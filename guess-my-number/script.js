'use strict';


//adding a secret value
let secretNumber =Math.trunc(Math.random() *20)+1;


//total score value also called  the state variable 
let score  = document.querySelector('.score').textContent;

//intaial value of high score
let highScore = 0;

//function to print the message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//Again button reset event
document.querySelector('.again').addEventListener('click',function(){

    score = 20;
    secretNumber =Math.trunc(Math.random() *20)+1;


    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    displayMessage('start guessing...');

    document.querySelector('.guess').value =' ';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    

})

//Check button guess event
document.querySelector('.check').addEventListener('click',function(){
    const guess =Number (document.querySelector('.guess').value);
    console.log(guess , typeof guess);

    //when ther is no input
    if (!guess){
        displayMessage('⛔ No Number');
        

    //when guess is correct
    }else if(guess === secretNumber){
        displayMessage('Correct Number✅');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //refactor method using ternary operator //when not the correct guess
    }else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You Loose😒');
            document.querySelector('.score').textContent = 0;
        }
       
    }
})

    //when guess is too high
    // else if(guess > secretNumber){
    //     document.querySelector('.message').textContent = 'Too High📈';
    //     if(score>1){
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You Loose😒'
    //         document.querySelector('.score').textContent = 0
    //     }
    
    //when guess is too low 
    // }else if(guess < secretNumber){
    //     document.querySelector('.message').textContent = 'Too Low📉';
    //     if(score>1){
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You Loose😒'
    //         document.querySelector('.score').textContent = 0
    //     }
    // }




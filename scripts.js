let userScores = 0;
let cpuScores = 0;


let userScoreEl = document.getElementById('userScore');
let cpuScoreEl = document.getElementById('cpuScore');

const scoreBoardEl = document.querySelector('.scores');
const resultEl = document.querySelector('.result > h2');


const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');


function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3);
    // choose from 3 different random options
    return choices[randNum];
}


function win(a, b){
    userScores++;
    userScoreEl.innerHTML = userScores;
    cpuScoreEl.innerHTML = cpuScores;
    resultEl.innerHTML = `You choose ${a} cpu choose ${b}, so you win!`;
    console.log('you win')

}
function lose(a, b) {
    cpuScores++;
    userScoreEl.innerHTML = userScores;
    cpuScoreEl.innerHTML = cpuScores;
    resultEl.innerHTML = `You choose ${a} cpu choose ${b}, so you lose!`;
    console.log('you lose')

}


function draw(a, b) {    
    userScoreEl.innerHTML = userScores;
    cpuScoreEl.innerHTML = cpuScores;
    resultEl.innerHTML = ` Both chooses ${a},it's a draw`;
    console.log("it's a draw")
   
}


function game(userChoice){
    const cpuChoice = getCpuChoice();

    switch (userChoice + cpuChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, cpuChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, cpuChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, cpuChoice);
            break;    
    }   
}


function mainGame(){
    rockEl.addEventListener('click', ()=>{
        game('rock');
        console.log('rock');
    });

    paperEl.addEventListener('click', ()=>{
        game('paper');
        console.log('paper');
    });

    scissorsEl.addEventListener('click', ()=>{
        game('scissors');
        console.log('scissors');
    });
}
mainGame();


document.getElementById('reset').addEventListener('click',()=>{alert('Your game is going to be restarted');
    //Reset scores
    userScores = 0;
    cpuScores = 0;   
    userScoreEl.innerHTML = userScores;
    cpuScoreEl.innerHTML = cpuScores;})
;
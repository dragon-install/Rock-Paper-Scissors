const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.player');
const compScore = document.querySelector('.computer');
const body = document.querySelector('body');
let compMemory = 0;
let playerMemory = 0;

checkIfOver = () => {
  if(playerMemory == 5 || compMemory == 5) {
    if(playerMemory == 5) {
      alert('Player wins!');
      compMemory = 0;
      playerMemory = 0;
      playerScore.textContent = '0';
      compScore.textContent = '0';
    } else {
      alert('Computer wins!');
      compMemory = 0;
      playerMemory = 0;
      playerScore.textContent = '0';
      compScore.textContent = '0';
    }
  }
}

let compChoice = () => {
  let option = Math.random();
  if(option <= .3) {
    option = 'rock';
  } else if(option <= .6 && option > .3) {
    option = 'paper';
  } else {
    option = 'scissors';
  }
  return option;
};

compChoice();

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if(e.target.className == 'rock') {
      alert((playRound('rock', compChoice())));
      checkIfOver();
    } else if(e.target.className == 'paper') {
      alert(playRound('paper', compChoice()));
      checkIfOver();
    } else {
      alert(playRound('scissors', compChoice()));
      checkIfOver();
    }
  })
})

let playRound = (playerSelection, computerSelection) => {
  if(playerSelection == computerSelection) {
    return 'It\'s a tie.';
  } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore.textContent ++;
    playerMemory += 1;
    return 'Well done. Rock beats paper';
  } else if(playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore.textContent ++;
    playerMemory += 1;
    return 'Well done. Paper beats rock';
  } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore.textContent ++;
    playerMemory += 1;
    return 'Well done. Scissors beats paper';
  } else if(computerSelection == 'rock' && playerSelection == 'scissors') {
    compScore.textContent ++;
    compMemory += 1;
    return 'Oh well. Rock beats paper';
  } else if(computerSelection == 'paper' && playerSelection == 'rock') {
    compScore.textContent ++;
    compMemory += 1;
    return 'Oh well. Paper beats rock';
  } else {
    compScore.textContent ++;
    compMemory += 1;
    return 'Oh well. Scissors beats paper'
  }
};


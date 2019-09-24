let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice () {
  const choice = ['r', 'p', 's'];
  const randomNumber = Math.floor( Math.random() * 3 );
  return choice[randomNumber];
}

function convertToWord (letter) {
  if ( letter === "r") return "rock";
  if ( letter === "p") return "paper";
  if ( letter === "s") return "scissors";
}

function win(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerCompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML =  userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice)+ smallerUserWord + " beats " + convertToWord(computerChoice) + smallerCompWord + " .You Win!!"
  userChoice_div.classList.add('green-glow');
  setTimeout(
    () => userChoice_div.classList.remove('green-glow'), 500
  );
}

function lose(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerCompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML =  userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice)+ smallerUserWord + " loses to " + convertToWord(computerChoice) + smallerCompWord + " .You lost..."
  userChoice_div.classList.add('red-glow');
  setTimeout( () => userChoice_div.classList.remove('red-glow'), 500 );
}

function draw(userChoice, computerChoice) {
  const smallerUserWord = "user".fontsize(3).sub();
  const smallerCompWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML =  userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice)+ smallerUserWord + " equal to " + convertToWord(computerChoice) + smallerCompWord + " .its is draw..!!"
  userChoice_div.classList.add('gray-glow');
  setTimeout(
    () => userChoice_div.classList.remove('gray-glow'), 500 );
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice ) {
     case "rs":
     case "pr":
     case "sp":
       win(userChoice, computerChoice);
       break;

     case "sr":
     case "rp":
     case "ps":
       lose(userChoice, computerChoice);
       break;

     case "rr":
     case "pp":
     case "ss":
       draw(userChoice, computerChoice);
      break;
   }
}


function main() {
  rock_div.addEventListener('click', () => game("r") );

  paper_div.addEventListener('click', () => game("p") );

  scissors_div.addEventListener('click', () => game("s") );
}

main();

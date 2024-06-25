// first detail the starting score of both user and computer in a variable
let userScore = 0;
let computerScore = 0;
//get the user and computer score by ID in JS
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//query selector is used as the scoreboard and the result elements are a class attribute -
//i am selecting the attirbutes specifically
const scoreboard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

// create the computer's choices with Math.Random 
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]; 
}

//converting userChoice letters to words for paragraph 
function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

// logging the wins, losses and draws 
function win(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300)
}

function lose(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300)
}

function draw(userChoice, computerChoice){
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
  userChoice_div.classList.add("yellow-glow");
  setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 300)
}

// create all the possible outcomes for the wins, losses and draws for the user.
function game(userChoice) {
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
   win(userChoice, computerChoice);
   break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, computerChoice);
   break;
  case "rr":
  case "pp":
  case "ss":
    draw(userChoice, computerChoice);
   break;    
 }
}
// reset score to start over
const reset = () => {
  userScore = 0;
  computerScore = 0;
  document.querySelector("#user-score").innerHTML = userScore;
  document.querySelector("#computer-score").innerHTML = computerScore;
}

// create when a choice is selected
function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  })

  paper_div.addEventListener("click", () => {
    game("p");
  })


  scissors_div.addEventListener("click", () => {
    game("s");
})
}

main();











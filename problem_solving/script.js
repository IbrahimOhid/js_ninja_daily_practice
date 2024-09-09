// selector
const winnerNames = document.querySelector("#winner_name");
const winScore = document.querySelector("#win_score");
const playerOne = document.querySelector("#player_one_score");
const playerTwo = document.querySelector("#player_two_score");
const textValue = document.querySelector("#text_value");
const submitBtn = document.querySelector("#submit_btn");
const resetBtn = document.querySelector("#reset_btn");
const playBtnOne = document.querySelector("#play_btn_one");
const playBtnTwo = document.querySelector("#play_btn_two");

let winValue = 5;
let playOne = 0;
let playTwo = 0;
let winner = null;
let gameOver = false;

playOneTurn = true;
playTwoTurn = false;

winScore.textContent = winValue;

function winnerValue() {
  if (playOne === winValue || playTwo === winValue) {
    gameOver = true;
  }
}

function disableBtn() {
  playBtnOne.setAttribute("disabled", "disabled");
  playBtnTwo.setAttribute("disabled", "disabled");
}

function winnerName() {
  if (playOne === winValue) {
    winnerNames.textContent = "Player One Win ✌";
  }

  if (playTwo === winValue) {
    winnerNames.textContent = "Player Two Win ✌";
  }
}

function resetAll() {
  winValue = 5;
  playOne = 0;
  playTwo = 0;
  winner = null;
  gameOver = false;

  playerOne.textContent = playOne;
  playerTwo.textContent = playTwo;

  playBtnOne.removeAttribute("disabled");
  playBtnTwo.removeAttribute("disabled");
}

// player one btn event listener
playBtnOne.addEventListener("click", (e) => {
  if(playOneTurn){
    playOne++;
  playerOne.textContent = playOne;
  winnerValue();
  winnerName();
  playOneTurn = false;
  playTwoTurn = true;

  playBtnOne.setAttribute('disabled', 'disabled');
  playBtnTwo.removeAttribute('disabled');
  }
  if (gameOver) {
    disableBtn();
  }
});

// player Two btn event listener
playBtnTwo.addEventListener("click", (e) => {
  if(playTwoTurn){
    playTwo++;
  playerTwo.textContent = playTwo;
  winnerValue();
  
  winnerName();
  playTwoTurn = false;
  playOneTurn = true;

  playBtnTwo.setAttribute('disabled', 'disabled');
  playBtnOne.removeAttribute('disabled');
  }
  if (gameOver) {
    disableBtn();
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = textValue.value;
  winScore.textContent = +inputValue;
  textValue.value = ' ';
});

resetBtn.addEventListener("click", (e) => {
  resetAll();
});

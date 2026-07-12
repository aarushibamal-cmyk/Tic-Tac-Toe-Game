const cells = document.querySelectorAll(".cell");
const players = document.querySelectorAll(".player");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

let player1Score = 0;
let player2Score = 0;
let drawScore = 0;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

updateScoreboard();

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleClick(index));
});

function handleClick(index) {

  // Ignore if already filled
  if (board[index] !== "") return;

  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  if (checkWinner()) {

    if (currentPlayer === "X") {
      player1Score++;
      alert("Player 1 Wins!");
    } else {
      player2Score++;
      alert("Player 2 Wins!");
    }

    updateScoreboard();
    resetBoard();
    return;
  }

  if (board.every(cell => cell !== "")) {
    drawScore++;
    alert("It's a Draw!");
    updateScoreboard();
    resetBoard();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {

  for (let combination of winningCombinations) {

    const [a, b, c] = combination;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return true;
    }
  }

  return false;
}

function resetBoard() {

  board = ["", "", "", "", "", "", "", "", ""];

  cells.forEach(cell => {
    cell.textContent = "";
  });

  currentPlayer = "X";
}

function updateScoreboard() {
  players[0].textContent = `Player 1 : ${player1Score}`;
  players[1].textContent = `Draws : ${drawScore}`;
  players[2].textContent = `Player 2 : ${player2Score}`;
}
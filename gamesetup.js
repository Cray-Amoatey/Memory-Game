const radioInput = document.querySelector(
  'input[name="gameType"][value="numbers"]'
);
const startBtn = document.getElementById("startBtn");



// display game board
function displayGame() {
  if (radioInput.checked && startBtn) {
    window.location.href = "multiplayer4x4.html";
  }
}

startBtn.addEventListener("click", displayGame);

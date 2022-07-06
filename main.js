const resetBttn = document.getElementById("reset");
const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
//Game variables
let pScore = 0;
let cScore = 0;
let rWinner = "";
let playing = false;
const options = ["ROCK", "PAPER", "SCISSORS"];

//Game Variables

//Buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        var val = button.querySelector("img").alt;
        playing = true;
        triggerEvent(val);
    })
})

resetBttn.addEventListener("click", () => {
    pScore = 0;
    cScore = 0;
    rWinner = "";
    result.textContent = "";
    playing = false;
    resetBttn.style.display = "none";
    updateHTML();
})

//Buttons

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateScore(selectedValue, compValue) {
    if (selectedValue === compValue) {
        rWinner = 'tie';
    }
    if (
        (selectedValue === 'ROCK' && compValue === 'SCISSORS') ||
        (selectedValue === 'SCISSORS' && compValue === 'PAPER') ||
        (selectedValue === 'PAPER' && compValue === 'ROCK')
    ) {
        pScore++
        rWinner = 'Player'
    }
    if (
        (compValue === 'ROCK' && selectedValue === 'SCISSORS') ||
        (compValue === 'SCISSORS' && selectedValue === 'PAPER') ||
        (compValue === 'PAPER' && selectedValue === 'ROCK')
    ) {
        cScore++
        rWinner = 'Computer'
    }
}

function triggerEvent(selectedValue) {
    if (!isOver(pScore, cScore)) {
        //Normalizing data
        var compVal = getRandomInt(0, 2);
        compVal = options[compVal];
        //Game logic
        updateScore(selectedValue, compVal);
        updateHTML();
        if (isOver(pScore, cScore)) {
            var winner = getWinner();
            result.textContent = `${winner} has won the game.`;
            resetBttn.style.display = "inline-block";
        }
    }
}

function getWinner() {
    if (pScore === 5) {
        return "Player"
    } else {
        return "Computer"
    }
}

function isOver(pScore, cScore) {
    return pScore === 5 | cScore === 5
}

function updateHTML() {
    const playerScore = document.getElementById("pScore");
    const compScore = document.getElementById("cScore");
    playerScore.textContent = `${pScore}`;
    compScore.textContent = `${cScore}`;
    if (playing == true) {
        if (rWinner != "tie") {
            result.textContent = `${rWinner} won the round..`;
        } else {
            result.textContent = `There was a tie...`;
        }
    }
}
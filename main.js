const rockBttn = document.getElementById("rock");
const sciBttn = document.getElementById("scissor");
const paperBttn = document.getElementById("paper");

//Game variables
let pScore = 0;
let cScore = 0;
let rWinner = "";
let gWinner = "";

//Game Variables

//Buttons
rockBttn.addEventListener('click', (e) => {
    var val = e.target.value;
    triggerEvent(val);
})

sciBttn.addEventListener('click', (e) => {
    var val = e.target.value;
    triggerEvent(val);
})

paperBttn.addEventListener('click', (e) => {
    var val = e.target.value;
    triggerEvent(val);
})
//Buttons

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getChoice(val) {
    switch (val) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
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
        rWinner = 'player'
    }
    if (
        (compValue === 'ROCK' && selectedValue === 'SCISSORS') ||
        (compValue === 'SCISSORS' && selectedValue === 'PAPER') ||
        (compValue === 'PAPER' && selectedValue === 'ROCK')
    ) {
        cScore++
        rWinner = 'computer'
    }
}

function triggerEvent(selectedValue) {
    if (!isOver(pScore, cScore)) {
        //Normalizing data
        selectedValue = (parseInt(selectedValue, 10))
        selectedValue = getChoice(selectedValue);
        var compVal = getRandomInt(0, 2);
        compVal = getChoice(compVal);

        //Game logic
        updateScore(selectedValue, compVal);
        updateHTML();
        console.log(selectedValue, compVal);
        console.log(pScore, cScore, rWinner);
    } else {
        console.log("Game Over")
    }
}

function isOver(pScore, cScore) {
    return pScore === 5 | cScore === 5
}

function updateHTML() {
    const playerScore = document.getElementById("pScore");
    const compScore = document.getElementById("cScore");
    playerScore.textContent = `Player: ${pScore}`;
    compScore.textContent = `Enemy: ${cScore}`
}
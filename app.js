// DOM Elements
//Start Page Elements
const startGameBtn = document.querySelector(".startGameBtn");
const startPage = document.querySelector(".startPage");
const gamePage = document.querySelector(".gamePage");

//Game Page Elements
//Timer
const timerElement = document.querySelector(".timer");

//Total Points Card
const totalPointsElement = document.querySelector(".totalPoints");

//Categories and Answers


// add functionality to Start Game button on Start Page

startGameBtn.addEventListener("click", startGame)

function startGame(){
    console.log("start game");
    startPage.classList.add("hide");
    gamePage.classList.remove("hide");
}

// function selectAnswer(){

// }
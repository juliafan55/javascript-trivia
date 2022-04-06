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

//function to start game - hide start page, show game page, start timer
function startGame(){
    // console.log("start game");
    startPage.classList.add("hide");
    gamePage.classList.remove("hide");
    nextQuestion();
}

function nextQuestion (){

}


function selectAnswer(){

}

const listOfQuestions =[
    {
        question: "How many tails does a cat have?",
        answers: [
            { text: 4, correct:true },
            { text: 6, correct: false},
            { text: 8, correct: false},
            { text: 10, correct: false},
        ]
    }
    {
        question: "How many planets are there?",
        answers: [
            { text: 4, correct:true },
            { text: 6, correct: false},
            { text: 8, correct: false},
            { text: 10, correct: false},
        ]
    }
    {
        question: "What is the total number of Zodiac Signs?",
        answers: [
            { text: 6, correct:true },
            { text: 8, correct: false},
            { text: 10, correct: false},
            { text: 12, correct: false},
        ]
    }
]

// factory functions classes toc reate diff categories
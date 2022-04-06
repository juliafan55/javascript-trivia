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

//Questions and Answers
let questionElement = document.querySelector(".question");
let answerElement = document.querySelectorAll(".answerBtn");

//list of questions
const listOfQuestions =[
    {
        question: "How many tails does a cat have?",
        answers: [
            { text: 4, correct:true },
            { text: 6, correct: false},
            { text: 8, correct: false},
            { text: 10, correct: false},
        ]
    },
    // {
    //     question: "How many planets are there?",
    //     answers: [
    //         { text: 4, correct:true },
    //         { text: 6, correct: false},
    //         { text: 8, correct: false},
    //         { text: 10, correct: false},
    //     ]
    // },
    // {
    //     question: "What is the total number of Zodiac Signs?",
    //     answers: [
    //         { text: 6, correct:true },
    //         { text: 8, correct: false},
    //         { text: 10, correct: false},
    //         { text: 12, correct: false},
    //     ]
    // }
]

// add functionality to Start Game button on Start Page
startGameBtn.addEventListener("click", startGame)

//function to start game - hide start page, show game page - stretch: set timer and points tracker
function startGame(){
    // console.log("start game");
    startPage.classList.add("hide");
    gamePage.classList.remove("hide");
    nextQuestion();
}

//placing the next question on the screen - stretch: shuffle the questions
function nextQuestion (){
    placeQuestion()
}

//places que question on the container
function placeQuestion (question){
    questionElement.innerText = listOfQuestions[0].question;
    question.answers.forEach(answer => {

    })
}

// addeventlistener to next button to increment listOfQuestions by 1

function selectAnswer(){

}


// factory functions classes toc reate diff categories
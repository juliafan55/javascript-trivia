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
let answerBtn = document.querySelectorAll(".answerBtn")
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Ray's suggestion - array from nodelist
// let answerElement = Array.from(document.querySelectorAll(".answerBtn"));
let option1Element = document.querySelector(".option1");
let option2Element = document.querySelector(".option2");
let option3Element = document.querySelector(".option3");
let option4Element = document.querySelector(".option4");

//global variables -- stretch score and timer
let currentQuestion;
// let availableQuestions = []
// let correctAnswer = true

//list of questions
let questionIndex = 0
let listOfQuestions =[
    {
        question: "How many tails does a cat have?",
        options: ["A. 1 TAIL", 
                  "B. 2 TAILS", 
                  "C. 3 TAILS", 
                  "D. 4 TAILS"],
        answer: "A. 1 TAIL"
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

//Event listeners
//start button on start page
startGameBtn.addEventListener("click", startGame);


//function to start game - hide start page, show game page - stretch: set timer and points tracker
function startGame(){
    // console.log("start game");
    startPage.classList.add("hide");
    gamePage.classList.remove("hide");
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // availableQuestions = [...listOfQuestions]
    currentQuestion = 0;
    placeQuestion();
}

//places the question on the container
function placeQuestion (){
    for(let i = 0; i < listOfQuestions.length; i++){
        questionElement.innerText = listOfQuestions[questionIndex].question;
        option1Element.innerText = listOfQuestions[questionIndex].options[0];
        option2Element.innerText = listOfQuestions[questionIndex].options[1];
        option3Element.innerText = listOfQuestions[questionIndex].options[2];
        option4Element.innerText = listOfQuestions[questionIndex].options[3];
    }

    //Checks Answer
    option1Element.addEventListener("click", function(e){
        if(e.target.innerText === listOfQuestions[0].answer){
            option1Element.classList.add("green");
        } else {
            option1Element.classList.add("red");
        }
    })

    option2Element.addEventListener("click", function(e){
        if(e.target.innerText === listOfQuestions[0].answer){
            option2Element.classList.add("green");
        } else {
            option2Element.classList.add("red");
        }
    })

    option3Element.addEventListener("click", function(e){
        if(e.target.innerText === listOfQuestions[0].answer){
            option3Element.classList.add("green");
        } else {
            option3Element.classList.add("red");
        }
    })

    option4Element.addEventListener("click", function(e){
        if(e.target.innerText === listOfQuestions[0].answer){
            option4Element.classList.add("green");
        } else {
            option4Element.classList.add("red");
        }
    })
}


// addeventlistener to next button to increment listOfQuestions by 1
// factory functions classes to create diff categories

//dataset https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
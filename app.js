// RETHINKING THIS
//need:

//event listener to startGameBtn
//event listener to nextBtn

// startGame()
// starts the game
// remove start button (when button is clicked, game starts)
// shuffle through the questions, randomly (?)
// set currentquestion at 0 - will need current question variable
// make the questions appear
// place the next question (function)

//placeQuestion()
//reset the game statue/clear the text/buttons
//show the next question

//showQuestion()
//change the innertext of the question element to the one in the array
//loop through all the answers for each question
//create buttons for each answer 
//put the text of each answer into the button

//selectAnswer()
//grab which button was selected
//check if the selected button is correct
//how do i store the information if the selected button is correct??
//if answer is correct - show green
//if answer is incorrect - show red
//if there are more questions: questionsList.length > currentquestion + 1
//show the next button
//next button needs to increment 1 to the currentquestion
//call placeQuestion()
//if no more question
//start button (hard reset)

//getting all required elements via DOM
const startBtn = document.querySelector(".startBtn");
const startPage = document.querySelector(".startPage")
const nextBtn = document.querySelector(".nextBtn")
const gamePage = document.querySelector(".gamePage")

//global variable, check which question we are at right now
let currentQuestionIndex = 0;

//array of all the questions and answers
let questions = [
    {
        question: "What is 2+2?",
        options: ["4", "5", "45", "22"],
        answer: "4"
    },
    {
        question: "How many states in United States?",
        options: ["20", "30", "40", "50"],
        answer: "50"
    },
    {
        question: "What does CSS stand for?",
        options: ["Common Style Sheet", "Colorful Style Sheet", "Compyter Style Sheet", "Cascading Style Sheet"],
        answer: "Cascading Style Sheet"
    }
]

// if the start button is clicked -> brings to main game page -> starts the game
startBtn.addEventListener("click", () => {
    // console.log("start button works")
   startPage.classList.add("hide"); //hides the start button
   gamePage.classList.remove("hide"); //unhides the game page
   startGame(0) //initializes the startGame function
})

//if the next button is clicked -> increment question by 1 (if there are any questions left in the array), show next question
nextBtn.addEventListener("click", () => {
    // console.log("next button works")
    if(currentQuestionIndex < questions.length -1 ){ //if number of the current question is less than the number of the questions array
        currentQuestionIndex++; //increment current question by one
        startGame(currentQuestionIndex); //initialize next game by using the current question above
    } else {
        // console.log("game ended")
    }
})

//start game function, pulls questions and answers from the questions array
function startGame(index){
    const questionElement = document.querySelector(".question"); //pulls question element from HTML
    const answer1Element = document.querySelector(".opt1"); //pulls answer element from HTML
    const answer2Element = document.querySelector(".opt2"); 
    const answer3Element = document.querySelector(".opt3"); 
    const answer4Element = document.querySelector(".opt4");

    let questionText = `${questions[index].question}`; //pulls the questions from the array
    let option1Text = `${questions[index].options[0]}`; //pulls the answers from the array
    let option2Text = `${questions[index].options[1]}`; 
    let option3Text = `${questions[index].options[2]}`; 
    let option4Text = `${questions[index].options[3]}`; 

    questionElement.innerHTML = questionText; //places the text of the array to the HTML
    answer1Element.innerHTML = option1Text;
    answer2Element.innerHTML = option2Text;
    answer3Element.innerHTML = option3Text;
    answer4Element.innerHTML = option4Text;
}



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

//resources
// https://www.sitepoint.com/simple-javascript-quiz/

//VARIABLES
//getting all required elements via DOM
const startBtn = document.querySelector(".startBtn");
const startPage = document.querySelector(".startPage")
const gamePage = document.querySelector(".gamePage")
const nextBtn = document.querySelector(".nextBtn")
// const totalScore = document.querySelector(".totalScore")

//global variables
let currentQuestionIndex = 0;
let globalAnswer = [];
let acceptingAnswers = true;

//variables for score keeping
let score = 0;

//QUESTIONS
//array of all the questions and answers
let questions = [
    {   //0
        question: "Which film was Studio Ghibli’s first official production?",
        options: ["Castle in the Sky", "Nausicaä of the Valley of the Wind", "My Neighbor Totoro", "Grave of the Fireflies"],
        answer: "Castle in the Sky"
    },
    {   //1
        question: "Which actor from the newest Star Wars trilogy also voiced a protagonist in a Studio Ghibli film?",
        options: ["Lupita Nyong’o", "Daisy Ridley", "John Boyega", "Adam Driver"],
        answer: "Daisy Ridley"
    },
    {   //2
        question: "Which Studio Ghibli film was NOT directed by Hayao Miyazaki?",
        options: ["Kiki's Delivery Service", "The Wind Rises", "Ponyo", "Grave of the Fireflies"],
        answer: "Grave of the Fireflies"
    },
    {   //3
        question: "Which Studio Ghibli film does NOT include human-like animal characters?",
        options: ["Porco Rosso", "Princess Mononoke", "Spirited Away", "From Up on Poppy Hill"],
        answer: "From Up on Poppy Hill"
    },
    {   //4
        question: "How many Which Studio Ghibli character is featured in the studio’s logo? of the moon are there?",
        options: ["Totoro from My Neighbor Totoro", "Calcifer from Howl's Moving Castle", "Jiji from Kiki's Delivery Service", "Moro from Princess Mononoke"],
        answer: "Totoro from My Neighbor Totoro"
    },
    {   //5
        question: "Which author adapted the movie script for Princess Mononoke?",
        options: ["Neil Gaiman", "Michael Chabon", "Haruki Murakami", "Terry Pratchett"],
        answer: "Neil Gaiman"
    },
    {   //6
        question: "Which Studio Ghibli film is based on The Little Mermaid?",
        options: ["The Tale of Princess Kaguya", "Spirited Away", "Ponyo", "Grave of the Fireflies"],
        answer: "Ponyo"
    },
    {   //7
        question: "Which Studio Ghibli film’s protagonist is a World War I veteran?",
        options: ["Seita from Grave of the Fireflies", "Jiro Horikoshi from The Wind Rises", "Porco Rosso from Porco Rosso", "Shun Kazama from From Up on Poppy Hill"],
        answer: "Porco Rosso from Porco Rosso"
    },
    {   //8
        question: "Which Studio Ghibli film is based on a Diana Wynne Jones novel?",
        options: ["Howl's Moving Castle", "The Secret World of Arrietty", "The Cat Returns", "Only Yesterday"],
        answer: "Howl's Moving Castle"
    },
    {   //9
        question: "Which of the following Studio Ghibli films is the director’s original work?",
        options: ["The Secret World of Arrietty", "Tales of Earthsea", "Nausicaä of the Valley of the Wind", "The Tale of Princess Kaguya"],
        answer: "Nausicaä of the Valley of the Wind"
    }
]


//EVENT LISTENERS
// if the start button is clicked -> brings to main game page -> starts the game
startBtn.addEventListener("click", () => {
    // console.log("start button works")
    startPage.classList.add("hide"); //hides the start button
    gamePage.classList.remove("hide"); //unhides the game page
    startGame(0) //initializes the startGame function at question index 0
})

//if the next button is clicked -> increment question by 1 (if there are any questions left in the array), show next question
nextBtn.addEventListener("click", () => {
    removeSelectedAnswerStyling();
    // console.log("next button works")
    if(currentQuestionIndex < questions.length -1 ){ //if number of the current question is less than the number of the questions array
        currentQuestionIndex++; //increment current question by one
        startGame(currentQuestionIndex); //initialize next game by using the current question above
    } else {
        // console.log("game ended")
    }
})

//FUNCTIONS
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

    //suggested -- Tico me ajudou
    const option = document.querySelectorAll(".answerBtn"); //pulls all the answer buttons
    // https://stackoverflow.com/questions/30446152/how-to-add-parameters-onto-function-in-setattribute-method-in-javascript
    //https://stackoverflow.com/questions/28685407/this-setattributeonclick-javascript-doesnt-works
        for (let i=0; i<option.length; i++){ //iterates over the answer buttons
            option[i].setAttribute("onclick", "selectedAnswer(this)") //add the onclick attribute with the function selectedAnswer
        }
    acceptingAnswers = true
}

function selectedAnswer(answer){ //function that checks what was selected for an answer
    // console.log("global answer", globalAnswer);
    globalAnswer.push(answer)
    if (!acceptingAnswers) return //make it so only accepts one click
    acceptingAnswers = false
    
    let userAnswer = answer.textContent; //sets variable to the text that is inside answer in the array
    let correctAnswer = questions[currentQuestionIndex].answer; //pulls correct answer from array
    //currentQuestionIndex is a global variable so it can be pulled here - will update as question count goes up
    // console.log(correctAnswer)
    if (userAnswer === correctAnswer){ //checks if user answer === correct answer
        score = score +1; //increment the score
        answer.classList.add("correct") //adds green background
        // console.log("answer is correct")
        // console.log(score)
    } else {
        score = score -1; //decrement the score
        answer.classList.add("wrong") //else adds red background
        // console.log(score)
        // console.log("answer is wrong")
    }
    document.querySelector(".totalScore").value = score; //stores the value of score in the totalScore element https://www.w3schools.com/jsref/prop_attr_value.asp
    let totalScoreElement = document.querySelector(".totalScore");
    totalScoreElement.innerHTML = `Total Score: ${score}`;
    // console.log(score)
}

// Tico ajudou
function removeSelectedAnswerStyling(){ //function to remove styling
    globalAnswer.map((answer) => { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        answer.classList.remove("correct")
        answer.classList.remove("wrong")
    }) 
    //Bom colocar aqui, porque depois de remover os styles, ele reseta esse array
    // Pra não ficar guardando as opções das perguntas anteriores
    globalAnswer=[]
}


let timerCount = 10;
let timer = setInterval (function (){
    document.querySelector(".timer").innerHTML = timerCount;
    timerCount--;
    if (timerCount === 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "You're out of time!";
        if (!acceptingAnswers) return
        acceptingAnswers = false
    }
}, 1000);
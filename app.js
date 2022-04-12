//VARIABLES
//getting all game required elements via DOM
const startBtn = document.querySelector(".startBtn");
const startPage = document.querySelector(".startPage")
const gamePage = document.querySelector(".gamePage")
const nextBtn = document.querySelector(".nextBtn")
const restartGameBtn = document.querySelector(".restartGameBtn")

//for the category
const howlBtn = document.querySelector(".howlMovingCastle")

//modal
const modalOpenBtn = document.querySelector(".openModal")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modalClose")

//global variables
let currentQuestionIndex = 0;
let globalAnswer = [];
let acceptingAnswers = true;

//variable for score keeping
let score = 0;

//QUESTIONS
//array of all the questions and answers
let questions = [
    {   //0
        question: "Which film was Studio Ghibli’s first official production?",
        options: ["Castle in the Sky", "Nausicaä of the Valley of the Wind", "My Neighbor Totoro", "Grave of the Fireflies"],
        answer: "Castle in the Sky",
        category: "General"
    },
    {   //1
        question: "Which Studio Ghibli film does NOT include human-like animal characters?",
        options: ["Porco Rosso", "Princess Mononoke", "Spirited Away", "From Up on Poppy Hill"],
        answer: "From Up on Poppy Hill",
        category: "General"
    },
    {   //2
        question: "Which Studio Ghibli character is featured in the studio’s logo? of the moon are there?",
        options: ["Totoro from My Neighbor Totoro", "Calcifer from Howl's Moving Castle", "Jiji from Kiki's Delivery Service", "Moro from Princess Mononoke"],
        answer: "Totoro from My Neighbor Totoro",
        category: "General"
    },
    {   //3 - Howl's Moving Castle
        question: "What is the name of the female lead?",
        options: ["Jennifer", "Camila", "Anna", "Sophie"],
        answer: "Sophie",
        category: "Howl's Moving Castle"
    },
    {   //4 - Howl's Moving Castle
        question: "What was the name of Howl's fire demon?",
        options: ["Lucifer", "Calcifer", "Crucifer", "Furcifer"],
        answer: "Calcifer",
        category: "Howl's Moving Castle"
    },
    {   //5 - Howl's Moving Castle
        question: "How many aliases does Howl have?",
        options: ["None", "5", "As many as he needs", "3"],
        answer: "As many as he needs",
        category: "Howl's Moving Castle"
    }
]

//EVENT LISTENERS
// if the start button is clicked -> brings to main game page -> starts the game
startBtn.addEventListener("click", () => {
    startPage.classList.add("hide"); //hides the start button
    gamePage.classList.remove("hide"); //unhides the game page
    //if the next button is clicked -> increment question by 1 (if there are any questions left in the array), show next question
    nextBtn.addEventListener("click", () => {
        removeSelectedAnswerStyling(); //function to remove styling
        if(currentQuestionIndex < questions.length -1 ){ //if number of the current question is less than the number of the questions array
            currentQuestionIndex++; //increment current question by one
            startGame(currentQuestionIndex); //initialize next game by using the current question above
        } else {
            endGame();
        }
    })
    startGame(0) //initializes the startGame function at question index 0
})

//if Howl's Moving Castle category is clicked
howlBtn.addEventListener("click", () => {
    let array = howlArray()
    startPage.classList.add("hide"); //hides the start button
    gamePage.classList.remove("hide"); //unhides the game page

    nextBtn.addEventListener("click", () => {
        removeSelectedAnswerStyling();
        let array = howlArray()
        if(currentQuestionIndex < array.length -1 ){ //if number of the current question is less than the number of the questions array
            currentQuestionIndex++; //increment current question by one
            startGame(currentQuestionIndex, array); //initialize next game by using the current question above
        } else {
            categoryEndGame();
        }
    })
    startGame(0, array)
})

//restart button if clicked, unhides start page and hides game page
restartGameBtn.addEventListener("click", () => {
    window.location.reload();
})

//button to open modal
modalOpenBtn.addEventListener("click", () => {
    modal.classList.remove("hide");
})

//button to close modal
modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
})

//FUNCTIONS

//this solves scoping issue because it can be declared in the variable
//function to access Howl's Moving Castle in the questions array
function howlArray(){
    const filterHowl = questions.filter(category => category.category === "Howl's Moving Castle");
    return filterHowl
}

//start game function, pulls questions and answers from the questions array
function startGame(index, categoryArray){
    if(!categoryArray) {
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
    
        const option = document.querySelectorAll(".answerBtn"); //pulls all the answer buttons
            for (let i=0; i<option.length; i++){ //iterates over the answer buttons
                option[i].setAttribute("onclick", "selectedAnswer(this)") //add the onclick attribute with the function selectedAnswer
            }
        acceptingAnswers = true
    } else {
        const questionElement = document.querySelector(".question"); //pulls question element from HTML
        const answer1Element = document.querySelector(".opt1"); //pulls answer element from HTML
        const answer2Element = document.querySelector(".opt2"); 
        const answer3Element = document.querySelector(".opt3"); 
        const answer4Element = document.querySelector(".opt4");
        
        let questionText = `${categoryArray[index].question}`; //pulls the questions from the array
        let option1Text = `${categoryArray[index].options[0]}`; //pulls the answers from the array
        let option2Text = `${categoryArray[index].options[1]}`; 
        let option3Text = `${categoryArray[index].options[2]}`; 
        let option4Text = `${categoryArray[index].options[3]}`; 
        
        questionElement.innerHTML = questionText; //places the text of the array to the HTML
        answer1Element.innerHTML = option1Text;
        answer2Element.innerHTML = option2Text;
        answer3Element.innerHTML = option3Text;
        answer4Element.innerHTML = option4Text;

        //for checking answers of the Howl's Moving Castle category
        const optionHowl = document.querySelectorAll(".answerBtn"); //pulls all the answer buttons
        for (let i=0; i<optionHowl.length; i++){ //iterates over the answer buttons
            optionHowl[i].setAttribute("onclick", "selectedHowlAnswer(this)") //add the onclick attribute with the function selectedAnswer
        } 

        acceptingAnswers = true
    }
}

//function that checks what was selected for an answer
function selectedAnswer(answer){ 
    globalAnswer.push(answer) //push the removed styling
    if (!acceptingAnswers) return //make it so only accepts one click
    acceptingAnswers = false
    
    let userAnswer = answer.textContent; //sets variable to the text that is inside answer in the array
    let correctAnswer = questions[currentQuestionIndex].answer; //pulls correct answer from array
    //currentQuestionIndex is a global variable so it can be pulled here - will update as question count goes up

    if (userAnswer === correctAnswer){ //checks if user answer === correct answer
        score = score +1; //increment the score
        answer.classList.add("correct") //adds green background
    } else {
        answer.classList.add("wrong") //else adds red background
    }
    document.querySelector(".totalScore").value = score; //stores the value of score in the totalScore element
    let totalScoreElement = document.querySelector(".totalScore");
    totalScoreElement.innerHTML = `Total Score: ${score}`;
}


//function that checks what was selected for an answer in the Howl's Moving Castle category
function selectedHowlAnswer(answer) {
    globalAnswer.push(answer) //push the removed styling
    if (!acceptingAnswers) return //make it so only accepts one click
    acceptingAnswers = false
    
    let userAnswer = answer.textContent; //sets variable to the text that is inside answer in the array
    let howlAnswer = howlArray();
    let correctAnswer = howlAnswer[currentQuestionIndex].answer; //pulls correct answer from array
    //currentQuestionIndex is a global variable so it can be pulled here - will update as question count goes up

    if (userAnswer === correctAnswer){ //checks if user answer === correct answer
        score = score +1; //increment the score
        answer.classList.add("correct") //adds green background
    } else {
        answer.classList.add("wrong") //else adds red background
    }
    document.querySelector(".totalScore").value = score; //stores the value of score in the totalScore element
    let totalScoreElement = document.querySelector(".totalScore");
    totalScoreElement.innerHTML = `Total Score: ${score}`;
}

// Tico ajudou
//function to remove styling
function removeSelectedAnswerStyling(){ 
    globalAnswer.map((answer) => {
        answer.classList.remove("correct")
        answer.classList.remove("wrong")
    }) 
    //Bom colocar aqui, porque depois de remover os styles, ele reseta esse array
    // Pra não ficar guardando as opções das perguntas anteriores
    globalAnswer=[]
}

//timer
let timerCount = 30;
let timer = setInterval (function (){
    document.querySelector(".timer").innerHTML = `Time Left: ${timerCount}s`;
    timerCount--;
    if (timerCount === 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "You're out of time!";
        if (!acceptingAnswers) return
        acceptingAnswers = false
        endGame()
    }
}, 1000);

//ends the game and shows end game page
function endGame(){
    let endPage = document.querySelector(".endPage");
    let gameControls = document.querySelector(".controls");
    let restartGameBtn = document.querySelector(".restartGameBtn");
    restartGameBtn.classList.remove("hide");
    gameControls.classList.add("hide");
    endPage.innerHTML = `Your total score is ${score}/6!`;
}

//ends the game if started in category
function categoryEndGame(){
    let endPage = document.querySelector(".endPage");
    let gameControls = document.querySelector(".controls");
    let restartGameBtn = document.querySelector(".restartGameBtn");
    restartGameBtn.classList.remove("hide");
    gameControls.classList.add("hide");
    endPage.innerHTML = `Your total score is ${score}/3!`;
}


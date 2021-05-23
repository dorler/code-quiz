// Variable identifiers
var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var beginQuiz = document.getElementById("beginQuiz")

var quizQuestions = [
    {
        question: "What is 2 + 2 ",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "4",
    },
    {
        question: "what is a prime number1",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },
    {
        question: "what is a prime number2",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2",
    },
    {
        question: "what is a prime number3",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2",
    }
]

let timer;
let time = 75;

// Start Quiz 
function buildQuiz() { 
    //hide the start quiz
    document.querySelector(".start-group").classList.add("hide");
    //show the quiz container
    document.querySelector(".quiz-group").classList.remove("hide");
    //start the timer
    timer = setInterval(function() {
        //increace the time
        time--;
        //show the time update
        document.querySelector("#time").textContent = time;
        //check if time is 0 if so end it
        if (time <= 0) {
            endQuizGame();
        }
    }, 1000);
    //generate the quiz info
    generateQuizQuestion();
}

let qIndex = 0;
const generateQuizQuestion = function() {
    //get the current question
    const currentQ = quizQuestions[qIndex];
    //create template literal of the question
    const template =
        `
            <h2 class="question-title">${currentQ.question}</h2>
            <div class="answer-container">
                <div class="answer-choice">${currentQ.choices[0]}</div>
                <div class="answer-choice">${currentQ.choices[1]}</div>
                <div class="answer-choice">${currentQ.choices[2]}</div>
                <div class="answer-choice">${currentQ.choices[3]}</div>
            </div>
        `
    //show the question o nthe page 1. converts string into html, 2. it repalces the content of the contianer
    document.querySelector(".quiz-group").innerHTML = template;
    //choice clicking ability
}

beginQuiz.addEventListener("click",buildQuiz);
// function showResults() { }



// //Quiz Option 
// buildQuiz();

// //Complete 
// completeButton.addEventListener('click', showResult)

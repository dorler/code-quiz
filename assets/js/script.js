// Variable identifiers
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var beginQuiz = document.getElementById("beginQuiz");
var endQuiz = document.getElementById("endQuiz");
var li = document.createElement("li");
//var correctAnswer

var quizQuestions = [
  {
    question: "What is the standard markup language for documents?",
    choices: ["HTML", "CSS", "DOM", "Node"],
    correctAnswer: "HTML",
  },
  {
    question:
      "What language is responsible for the interactive components in an application? ",
    choices: ["HTML", "DOM", "JS", "CSS"],
    correctAnswer: "JS",
  },
  {
    question: "Which of the following can you NOT change with JavaScript?",
    choices: ["Element Attribute", "Text Content", "Format", "Meta Data"],
    correctAnswer: "Format",
  },
  {
    question: "what is a prime number3",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
  },
];

// Set Timer

let timer;
let time = 75;

// Start Quiz
function buildQuiz() {
  //hide the start quiz
  document.querySelector("#home").classList.add("hide");
  //show the quiz container
  document.querySelector(".quiz-group").classList.remove("hide");
  //start the timer
  timer = setInterval(function () {
    //increase the time
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
const generateQuizQuestion = function () {
  //get the current question
  const currentQ = quizQuestions[qIndex];
  //create template literal of the question
  const template = `
            <h2 class="question-title">${currentQ.question}</h2>
            <div class="answer-container">
                <div class="answer-choice">${currentQ.choices[0]}</div>
                <div class="answer-choice">${currentQ.choices[1]}</div>
                <div class="answer-choice">${currentQ.choices[2]}</div>
                <div class="answer-choice">${currentQ.choices[3]}</div>
            </div>
        `;
  //show the question on the page, converts string into html,  replaces the content of the container
  document.querySelector(".quiz-group").innerHTML = template;
  //choice clicking ability
};
// start the quiz when User pushes button
beginQuiz.addEventListener("click", buildQuiz);

// Dynamically Generate HTML Elements
var questions = document.querySelector("#questions");
var questionE1 = document.createElement("div", "quizQuestion");

//Set Score to 0
let score = 0;

//Function to handle answer choice
const handleAnswerChoice = function (event) {
  //check if the answer is correctAnswer
  const selected = event.target.textContent;
  const correctAnswer = quizQuestions[qIndex].correctAnswer;
  if (selected === correctAnswer) {
    score++;
  } else {
    time -= 5;
  }
  // show the next question
  qIndex++;
  if (qIndex === quizQuestions.length) {
    endQuizGame();
  } else {
    generateQuizQuestion();
  }
};

document
  .querySelector(".quiz-group")
  .addEventListener("click", function (event) {
    if (event.target.className.includes("answer-choice")) {
      handleAnswerChoice(event);
    }
  });

//Define EndQuizGame Function

const endQuizGame = () => {
  clearInterval(timer);
  //show the end quiz
  document.querySelector(".end-group").classList.remove("hide");
  //hide the quiz container
  document.querySelector(".quiz-group").classList.add("hide");
  //display scores
  document.querySelector("#final-score").textContent = score;
  //hide Timer
  document.querySelector("#time").classList.add("hide");
  //end game
};

//submit Quiz to local localStorage
const submitQuiz = function () {
  //localStorage.setItem("initials", "initials");
  //localStorage.setItem("score", "score");
  document.querySelector(".end-group").classList.add("hide");
  document.querySelector("#thank-you").classList.remove("hide");

  const initials = document.querySelector("input[name='initials']");
  const data = JSON.parse(localStorage.getItem("data")) || [];

  // create new data entry with
  const newData = {
    id: 0 ,
    name: initials,
    score: score,
  };

  data.push(newData);

  localStorage.setItem("data", JSON.stringify(data));
};

document.querySelector("#submitQuiz").addEventListener("click", submitQuiz);

const homePage = function () {
  document.querySelector("#thank-you").classList.add("hide");
  document.querySelector("#home").classList.remove("hide");
};

document.querySelector("#homebtn").addEventListener("click", homePage);


//Retrieve HighScores from Local Storage 

//Display HighScores in Html

const highScores = function () {
  document.querySelector("")
 localStorage.getItem("data") 
 //add highScore to HTML

}

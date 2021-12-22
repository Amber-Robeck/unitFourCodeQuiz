var startButton = document.getElementById("start");
var timerE1 = document.getElementById("displayTimer");
var timer = 45;
var questionBox = document.getElementById("questions-container")
var questionDisplay = document.getElementById("questions")
var buttonDisplay = document.getElementById("option-buttons")
var currentQuestionIndex = 0
var userScore = { name: " ", points: 0, }


if (JSON.parse(localStorage.getItem("user"))) {
  var player = JSON.parse(localStorage.getItem("user"))

} else {
  var player = [];
}
//start button starts timer and it stops when hits 0

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide")
  questionBox.classList.remove("hide")
  var interval = setInterval(function () {
    timer--;
    timerE1.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
    }

  }, 1000);
  showQuestion();

};
function showQuestion() {
  while (buttonDisplay.firstChild) {
    buttonDisplay.removeChild(buttonDisplay.firstChild)
  }
  questionDisplay.innerText = questions[currentQuestionIndex].askQuestion;
  questions[currentQuestionIndex].options.forEach(option => {
    var button = document.createElement("button")
    button.innerText = option.text

    button.addEventListener("click", selectAnswer)

    buttonDisplay.appendChild(button)
  })
};

var questions = [
  {
    askQuestion: "Inside which HTML element do we put the JavaScript?",
    options: [
      { text: "<script>" },
      { text: "<scripting>" },
      { text: "<javascript>" },
      { text: "<js>" }
    ],

    correct: "<script>",
  },



  {
    askQuestion: "Which of the following is NOT a valid JavaScript variable name?",


    options: [
      { text: "first_name" },
      { text: "2places" },
      { text: "OneAndTwo" },
      { text: "None of the above" }
    ],

    correct: "2places",
  },
  {
    askQuestion: "What is the correct JavaScript syntax to write 'Hello World' in the console?",
    options: [
      { text: "document.write('Hello World')" },
      { text: "response.write('Hello World')" },
      { text: "console.log('Hello World')" },
      { text: "document.innerText('Hello World')" }
    ],

    correct: "console.log('Hello World')",
  }
];


function selectAnswer(event) {
  var userSelect = event.target.innerText
  var rightWrong = document.getElementById("rightWrong");
  if (userSelect === questions[currentQuestionIndex].correct) {
    rightWrong.textContent = "Correct!"
    userScore.points = (userScore.points + 5)
  } else {
    rightWrong.textContent = "Wrong!"
    timer -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length && timer > 0) {
    showQuestion();
  } else {
    timer = 0;
    questionBox.classList.add("hide");
    timerE1.classList.add("hide");
    userScore.name = prompt("Please enter in your initials");
    player.push(userScore)
    localStorage.setItem("user", JSON.stringify(player));
    if (window.prompt) {
      window.location.href = "highscores.html"
    }

  }
}
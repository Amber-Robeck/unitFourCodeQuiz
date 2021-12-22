var startButton = document.getElementById("start");
var timerE1 = document.getElementById("displayTimer");
var timer = 10;
var questionBox = document.getElementById("questions-container")
var questionDisplay = document.getElementById("questions")
var buttonDisplay = document.getElementById("option-buttons")
var currentQuestionIndex = 0
var userScore = {name:" ", points: 0,}


//start button starts timer and it stops when hits 0

startButton.addEventListener("click", startQuiz);
    
  function startQuiz() {
  console.log(startButton)
  startButton.classList.add("hide")
  questionBox.classList.remove("hide")
    // questionBox.textContent = questions[0];
    var interval = setInterval(function () {
        timer--;
        // console.log(timer)
        timerE1.textContent = timer;
        if (timer === 0) {
                clearInterval(interval);
            } 
            
         } ,1000);
         showQuestion();

        };
  function showQuestion(){
    while (buttonDisplay.firstChild){
      buttonDisplay.removeChild(buttonDisplay.firstChild)
    }
    questionDisplay.innerText = questions[currentQuestionIndex].askQuestion;
    questions[currentQuestionIndex].options.forEach(option => {
      var button = document.createElement("button")
        button.innerText = option.text
        // button.setAttribute("data-value", option.text)
    
      button.addEventListener("click",selectAnswer)

      buttonDisplay.appendChild(button)
    // buttonDisplay.innerText = questions.options[0].text;
      // console.log(questions[0].options[0].text)
  })};

  

  // function nextQuestion(){
  //   showQuestion(currentQuestionIndex[0])
  // }
        // var questions = 
        //     {
        //         askQuestion: "first question",
        //         options: [
        //           {text: "1", correct: true},
        //           {text: "2", correct: false},
        //           {text: "3", correct: false},
        //           {text: "4", correct: false}]
        //         } 
        //         console.log (questions[0])

                var questions = [
                {
                   askQuestion: "Inside which HTML element do we put the JavaScript?",
                    options: [
                      {text: "<script>"},
                      {text: "<scripting>"},
                      {text: "<javascript>"},
                      {text: "<js>"}
                    ],
                    
                      correct: "<script>",
                    }, 
                    // console.log (questions.options[3].text)
  
                
                  {askQuestion: "Which of the following is not a valid JavaScript variable name?",
                  
                 
                       options: [
                         {text: "first_name"},
                         {text: "2places"},
                         {text: "OneAndTwo"},
                         {text: "None of the above"}
                       ],
                       
                         correct: "2places",
                       }, 
                       {
                        askQuestion: "third question",
                         options: [
                           {text: "1"},
                           {text: "2"},
                           {text: "3"},
                           {text: "4"}
                         ],
                         
                           correct: "1",
                         }      
                   ]; 
                  //  console.log(questions)
                // {
            //     q: "second question",
            //     options: [
            //       {text:"1", correct:true},
            //       {text:"2", correct:false},
            //       {text:"3", correct:false},
            //       {text:"4", correct:false}]
            // },
        
        
        function selectAnswer(event){
          console.log(event)
          var userSelect = event.target.innerText
          // console.log(userSelect)
          var rightWrong = document.getElementById("rightWrong");
          if (userSelect === questions[currentQuestionIndex].correct){
            rightWrong.textContent = "Correct!"
            userScore.points = (userScore.points + 5)
            console.log(userSelect)
         } else {
            rightWrong.textContent = "Wrong!"
         }
         currentQuestionIndex++;
        //  for (var i = 0; i < questions.length; currentQuestionIndex++){
        //  showQuestion();
        //  };
        if (currentQuestionIndex < questions.length){
         showQuestion();
        }else{
          questionBox.classList.add("hide");
          timerE1.classList.add("hide");
          userScore.name = prompt("Please enter in your initials");
          // console.log(prompt)
          // console.log(JSON.stringify(userScore));
          localStorage.setItem("user", JSON.stringify(userScore));
          if (window.prompt){
            window.location.href ="highscores.html"
          } 
          // else{
            // userScore.name = prompt("Please enter your initials!!")
          // };
          // var whereIsThis=event.target
          // console.log(whereIsThis)
          // console.log(window.prompt)
          // showHighScores();
        }}
        // }
        // function showHighScores(){
        //   var highScores = JSON.parse(localStorage.getItem("user"));
        //   var name = document.getElementById("name");
        //   var score = document.getElementById("score");
        //   console.log(highScores)
        //   name.textContent = highScores[0];
        //   score.textcontent = highScores[1]; 
        // }

        
        //Click on Start button
          // start the timer
          // display the first question with options 
            // check if index < questions.length
            //create a function with index as an argument
          //each option is a button with click event on it // may be use event.target with matches function
        
        //Stopt the timer
          // if timer = 0;
          // if user finished the quiz
        
        //Find out if user clicked option is correct or not
          //if correct : display message (for certain time period)
          //wrong : display msg for certain time period)
          // calculate the score (but don't display) and change the timer accordingly
        // index++
        //display the next question
        
        //once user finished with last question
         // stop timer
         //ask for user initials in a form > take that info and display it with score
         //save initials and score in local storage
         // a href will refer to second html file
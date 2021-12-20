var startButton = document.getElementById("start");
var timerE1 = document.getElementById("displayTimer");
var timer = 10;
var questionBox = document.getElementById("questions")



//start button starts timer and it stops when hits 0

startButton.addEventListener("click", startQuiz)
    
  function startQuiz() {
  console.log(startButton)
  startButton.classList.add("hide")
    questionBox.textContent = questions[0];
    var interval = setInterval(function () {
        timer--;
        console.log(timer)
        timerE1.textContent = timer;
        if (timer === 0) {
                clearInterval(interval);
            } 
            
         } ,1000);
        };

        var questions = [
            {
                q: "first question",
                options: ["1", "2", "3", "4"],
                correct: "1"
            },
            {
                q: "second question",
                options: ["1", "2", "3", "4"],
                correct: "2"
            }
        ]
        
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
var startButton = document.getElementById("start");
var timerE1 = document.getElementById("displayTimer");
var timer = 10;



//start button starts timer and it stops when hits 0

startButton.addEventListener("click", function() {
    console.log(startButton)

    var interval = setInterval(function () {
        timer--;
        console.log(timer)
        if (timer === 0) {
                clearInterval(interval);
            } 
            
         } ,1000);
        });
function showHighScores() {
    var highScores = JSON.parse(localStorage.getItem("user"));
    var scores = document.getElementById("scores");
    console.log(highScores)
    if (highScores) {
        for (var i = 0; i < highScores.length; i++) {
            var list = document.createElement("li");
            list.style.listStyle = "none";
            //this line template literal was taught by tutor David J
            list.textContent = `user: ${highScores[i].name}  score: ${highScores[i].points}`
            scores.appendChild(list);
        }
    } else {
        highScores = []
    }
    var button = document.createElement("button")
    button.innerHTML = "Reset"
    document.body.appendChild(button);
    button.addEventListener("click", function () {
        localStorage.clear()
        list.textContent = "";
    })

}
showHighScores();
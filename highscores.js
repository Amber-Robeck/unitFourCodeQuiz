function showHighScores() {
    var highScores = JSON.parse(localStorage.getItem("user"));
    // var highScore = JSON.parse(localStorage.getItem("points"));

    var name = document.getElementById("name");
    var points = document.getElementById("score");
    // console.log(highScores)
    // console.log()
    name.textContent = highScores.name;
    points.textContent = highScores.points;
    // score.textcontent = highScore;
}
showHighScores();
//Runs on unload
function diceRoll() {
  var roll1 = Math.floor(Math.random() * 6) + 1; //1-6
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", "images/dice" + roll1 + ".png"); //change player one dice image to 1-6

  var roll2 = Math.floor(Math.random() * 6) + 1; //1-6
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", "images/dice" + roll2 + ".png"); //change player two dice image to 1-6

  //winner results
  if (roll1 > roll2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (roll1 < roll2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 It's a draw! 🚩";
  }
}

window.onload = diceRoll(1, 6);

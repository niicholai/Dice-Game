//Runs on button press
function diceRoll() {
  var roll1 = Math.floor(Math.random() * 6) + 1; //1-6
  var image1 = document.getElementById("img1");
  image1.setAttribute("src", "images/dice" + roll1 + ".png"); //change player one dice image to 1-6

  var roll2 = Math.floor(Math.random() * 6) + 1; //1-6
  var image2 = document.getElementById("img2");
  image2.setAttribute("src", "images/dice" + roll2 + ".png"); //change player two dice image to 1-6

  //winner results text
  if (roll1 > roll2) {
    document.querySelector("h1").innerHTML =
      "<img src='images/flagLeft.png'></img> Player 1 wins!";
  } else if (roll1 < roll2) {
    document.querySelector("h1").innerHTML =
      "Player 2 wins! <img src='images/flagRight.png'></img>";
  } else {
    document.querySelector("h1").innerHTML =
      "<img src='images/flagLeft.png'></img> It's a draw! <img src='images/flagRight.png'></img>";
  }
}

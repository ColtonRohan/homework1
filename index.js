
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// using string concatanetion you can rebuild the images/dice1-6.png tag in a format that will match your RNG

var randomDiceImage = "images/dice" +randomNumber1+ ".png";
var randomDiceImage1 = "images/dice" +randomNumber2+ ".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!" ;
  }

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 2 Wins!";
  }
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "🏴‍☠️Draw!";
}
  

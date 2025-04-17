import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() 
{
  /*write your code here
  store card values 2-10+king queen jack ace*/
  const cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  /*                 0    1    2    3    4    5    6    7    8     9    10   11   12 
  Store suit*/
  const cardSuit = ['♦', '♥', '♠', '♣']
  const randomCardValue = cardValue[Math.floor(Math.random() * cardValue.length)];
  const randomCardSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
  if(randomCardSuit === '♦' || randomCardSuit === '♥') {
    document.getElementById('suitDisplay1').style.color = "red";
    document.getElementById('suitDisplay2').style.color = "red";
    document.getElementById('valueDisplay').style.color = "red";
  }

  document.getElementById('valueDisplay').innerText = `${randomCardValue}`;
  document.getElementById('suitDisplay1').innerText = `${randomCardSuit}`;
  document.getElementById('suitDisplay2').innerText = `${randomCardSuit}`;
}

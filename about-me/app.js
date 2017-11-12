'use strict';

var score=0;
var name = prompt('Welcome to the Yohanes trivia ' + name + 'Please enter your user name.');

function namFun(){
  var nameQuestion = prompt ('Is "Yohanes" a translated version of "Juan"?').toLowerCase();
  var nameAnswer = 'yes';
  console.log ('First Question', nameQuestion);

  if (nameQuestion === nameAnswer) {
    alert ('How the hell did you know?! Yohanes is the Amharic interpreted name for "John" which is the english interpreted name for the spanish translation, "Juan". You are one step closer to a million dollars! Are you ready for your next question?');
    score++;
    console.log('score count', score);
  } else {
    alert ('Of course you didn\'t know that one. Unless you\'ve completed the entire Rosetta Stone collection.');
  }
}
namFun();

function homeTownFun () {
  var homeTownQuestion = prompt ('Has Yohanes lived in Seattle his whole life?').toLowerCase();
  var homeTown = 'yes';
  console.log('home town', homeTownQuestion);

  if (homeTownQuestion === homeTown) {
    alert ('Correct! Might have been a lucky guess. He is in fact a proud Seattelite! Let\'s test your luck on the next question...');
    score++;
    console.log('score count', score);

  } else {
    alert ('You just ruined your chance at a million dollars smh... good bye.');
  }
}
homeTownFun();

function carFun(){
  var carQuestion = prompt ('Does yohanes drive a Porche Panemera?').toLowerCase();
  var carAnswer = 'no';
  console.log('car question', carQuestion);

  if (carQuestion === carAnswer) {
    alert ('Yeaaa, he just drives a regular honda. But he is still hopeful!');
  } else {
    alert ('Although he imagines this to be true as well, his imaginary porche is actually a Honda Civic. Long story short, you got the wrong answer.');
  }
}
carFun();

function tvShow(){
  var breakingBad = prompt ('Has Yohanes ever watched Breaking Bad?').toLowerCase();
  var breakingBadAnswer = 'yes';
  console.log ('Breaking Bad', breakingBad);

  if (breakingBad === breakingBadAnswer) {
    alert ('Hell Yea! You aren\'t living if you haven\'t! Anyways... on to the final question to win ONE MILLION DOLLARS! Are you ready?...');
    score++;
    console.log('score count', score);
  } else {
    alert ('Are you kidding me... who hasn\'t watched Breaking Bad! Smh...');
  }
}
tvShow();

function softwareFun(){
  var softwareDeveloper = prompt ('For you\'re final question, you must know Yohanes pretty well to answer coreectly and walk home with $1,000,000.... Will Yohanes.... be the greatest software developer this world has ever seen?').toLowerCase();
  var softwareDevAnswer = 'yes';
  console.log ('software developer', softwareDeveloper);

  if (softwareDeveloper === softwareDevAnswer) {
    alert ('CONGRATULATIONS YOU JUST WON $1,000,000 DOLLARS!!!! You truly know Yohanes better than anyone. Feel free to tap the "donations" box and share your winnings with him. He sure can use that porche Panemera. ');
    score++;
    console.log('score count', score);

  }
}
softwareFun();

function favNum(){
  for (var i=0; i<4; i++) {
    var favoriteNumber= prompt('What is my favorite number?');
    var numberAnswer= '7';
    console.log('favorite number', favoriteNumber);
    if (favoriteNumber === numberAnswer) {
      alert('Wow, lucky guess!');
      console.log('true', favoriteNumber);
      score++;
      console.log('score count', score);
      break;
    } else if (favoriteNumber < numberAnswer) {
      console.log('Close! but too low. ', favoriteNumber);
      alert('Close! but too low. '); }
    else if (favoriteNumber > numberAnswer) {
      console.log('Sorry, too high.', favoriteNumber);
      alert('Sorry, too high.');
    } else {
      console.log('Incorrect input', favoriteNumber);
      alert('Incorrect input.');
    }
  }
}
favNum();

function favCar(){
  var favoriteCars = ['panemera', 'tesla', 'chevelle', 'lamborghini','rocket ship'];
  for (var i=0; i<6; i++) {
    var automobile = prompt('Can you guess one of my 5 favoirte cars?').toLowerCase();
    if (favoriteCars.includes(automobile)){
      alert('Great guess. My dream car collection consists of a Lamboghini Armagedon, \'64 Chevy Chevelle, Porche Panemera, Tesla S, and a daily commutable rocket ship!(even if it hasn\'t been invented yet)');
      console.log('favorite cars', favoriteCars);
      score++;
      console.log('score count', score);
      break;

    } else alert('That\'s a good guess but not my top 5.');
    console.log('right or wrong', favoriteCars);
    while(i===5) {
      alert('You had some good guess but my dream car collection consists of a Lamboghini Armagedon, \'64 Chevy Chevelle, Porche Panemera, Tesla S, and a daily commutable rocket ship (even if it hasn\'t been invented yet).');
      console.log('favorite cars after 5 gueses', favoriteCars);
      break;
    }
  }
}
favCar();

alert ('Congratulations '+name+'You have completed the essay! You answered'+score+' out of 7 questions coorect. Unfortunately you did not win the grand prize. Better luck next time on our trivia and have a great day!') ;

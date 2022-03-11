'use strict';

function childrenQuestion(){
  let answerOne = prompt ('Do I have children? Please use y/yes or n/no for all yes or no questions! Thank you!').toLowerCase();
  if(answerOne === 'y' || answerOne === 'yes'){
    alert('You were correct! I have a four year old son!');
    // console.log('user is right, my little guy is 4!');
  } else if(answerOne === 'n' || answerOne === 'no'){
    alert('Sorry! good guess though!');
    // console.log('user was incorrect!');
  }
}

function texasQuestion(){
  let answerTwo = prompt ('Am I from Texas?').toLowerCase();
  if(answerTwo === 'y' || answerTwo === 'yes'){
    alert('Nope! I am a Cali boy to the core!');
    // console.log('user was correct');
  } else if(answerTwo === 'n' || answerTwo === 'no'){
    alert('Correct! I am from Los Angeles CA!');
    // console.log('user was incorrect!');
  }
}

function videoGameQuestion(){
  let answerThree = prompt ('Am I interested in video games?').toLowerCase();
  if(answerThree === 'y' || answerThree === 'yes'){
    alert('Yes! i love video games! Currently playing Horizon!');
    // console.log('user was correct');
  } else if(answerThree === 'n' || answerThree === 'no'){
    alert('Nope! sorry! i love video games. like a lot!');
    // console.log('user was incorrect!');
  }
}

function militaryQuestion(){
  let answerFour = prompt ('Did i serve in the military?').toLowerCase();
  if(answerFour === 'y' || answerFour === 'yes'){
    alert('I did! 6 years in the Navy.');
  // console.log('user was correct');
  } else if(answerFour === 'n' || answerFour === 'no'){
  // console.log('user was incorrect!');
    alert('Sorry! I served 6 years in the Navy!');
}
}

let answerFive = prompt ('Do I love movies?').toLowerCase();
if(answerFive === 'y' || answerFive === 'yes'){
  alert('I will binge movies for an entire weekend. They are AMAZING');
  // console.log('user was correct');
} else if(answerFive === 'n' || answerFive === 'no'){
  alert('Cmon.. who does not like movies!?');
  // console.log('user was incorrect!');
}

let myNumber = 26;
let maxRetry = 3;
for (let i = 0; i < maxRetry; i++){
  let answerSix = prompt ('How old am I?');
  if (parseInt (answerSix) === myNumber){
    alert('Correct!');
    break;
    // cosole.log('user was correct');
  } else if(answerSix < myNumber){
    alert('Too low!');
    // console.log('user was too low');
  } else if(answerSix > myNumber){
    alert('Too high!');
    // console.log('user was too high');
  }
  if(i === maxRetry){
    alert('You are out of chances! I am 26!');
  }
}
let maxRetryTwo = 5;
let userGuess = false;
let sevenArr = ['navy', 'army', 'air force', 'marines', 'space force'];
for (let i = 0; i <= maxRetryTwo; i++){
  let answerSeven = prompt ('I have an easy one for you. Can you name one of the five branches of the US military?');
  console.log(answerSeven);
  for (let j = 0; j < sevenArr.length; j++){
    console.log(sevenArr[j]);
    if (answerSeven.toLowerCase() === sevenArr[j]){
      userGuess = true;
      break;
    }
  }
  if (userGuess){
    break;
  }
}

let userName = prompt('Welcome to my site! What is your name?');
let answer = `Welcome ${userName} !`;

if (userName){
  document.write(`<h2>${answer}</h2>`);
}

childrenQuestion();
texasQuestion();
videoGameQuestion();
militaryQuestion();

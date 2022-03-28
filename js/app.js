/*
here is code that will:
 make things smooth
 create card questions
 create random generator
 create bonus round
 create options for answers
 create questions
 tally points
 Make a bargraph using local storage of wins 
            or make bargraph of probability guessing the next card

*/


// let quizArray = [];

// let answersArray = [];
use strict;

let myForm = document.getElementById('Response-fromQuiz');
let legElem = document.getElementById('question-box');
let opt1 = document.getElementById('optionOne');
let opt2 = document.getElementById('optionTwo');
let opt3 = document.getElementById('optionThree');
let opt4 = document.getElementById('optionFour');


function GenerateQuiz(questions, quizContainer, resultsContainer){
  this.questions = questions;
  this.quizContainer = quizContainer;  //actual quiz 3 of them obj literal
  this.resultsContainer = resultsContainer; //quiz score
  quizArray.push(this)

}
GenerateQuiz.prototype.showQuestions = function(questions, quizContainer, resultsContainer){
  
}
new GenerateQuiz(questions, quizContainer, resultsContainer)

GenerateQuiz.prototype.renderForm = function(){
  let arrCont = optionsHtmlarray.split(' ');
  legElem.textContent = quizHtmlArray[i];
  opt1.textContent = arrCont[0];
  opt2.textContent = arrCont[1];
  opt3.textContent = arrCont[2];
  opt4.textContent = arrCont[3];
  myForm.appendChild();

}
function handleSubmit(event){
  for(let i = 0; i < questions.length; i++){


  }


}
myForm.addEventListener('submit', handleSubmit)
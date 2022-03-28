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

use strict;

let quizArray = [];

let answersArray = [];

let myForm = document.getElementById('Answer-fromQuiz');

function GenerateQuiz(questions, quizContainer, resultsContainer, submitButton){
  this.questions = questions;
  this.quizContainer = quizContainer;
  this.resultsContainer = resultsContainer;
  this.submitButton = submitButton;
  quizArray.push(this)

}
GenerateQuiz.prototype.showQuestions = function(questions, quizContainer, resultsContainer){
  
}

function handleSubmit(event){
  for(let i = 0; i < questions.length; i++){


  }


}
myForm.addEventListener('submit', handleSubmit)
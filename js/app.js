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

'use strict'

let myForm = document.getElementById('Response-fromQuiz');
let legElem = document.getElementById('question-box');
let opt1 = document.getElementById('optionOne');
let opt2 = document.getElementById('optionTwo');
let opt3 = document.getElementById('optionThree');
let opt4 = document.getElementById('optionFour');

/*******************constructor ****************** */
function GenerateQuiz(quizQuestion, quizOption, quizAnswer)
{
  this.questions = quizQuestion;
  this.quizOption = quizOption;  //actual quiz 3 of them obj literal
  this.quizAnswer = quizAnswer
  this.resultsCounter = resultsCounter; //quiz score

  quizArray.push(this)

}
/******************************* Prototypes*************** */
GenerateQuiz.prototype.showQuestions = function()
{
  

}


GenerateQuiz.prototype.renderForm = function()
{
  let arrCont = optionsHtmlarray.split(' ');
  legElem.textContent = quizHtmlArray[i];
  opt1.textContent = arrCont[0];
  opt2.textContent = arrCont[1];
  opt3.textContent = arrCont[2];
  opt4.textContent = arrCont[3];
  //myForm.appendChild();

}

/******************** generating the questions *************** */
//quizHtmlArray, quizCssArray, quizJsArray
//optionsHtmlArray, optionsCssArray, optionsJsArray
//answersHtmlArray, anwswersCssArray, answersJsArray
for(let i = 0; i < quizHtmlArray.length; i++)//all arrays should be exactly the same length
{
  new GenerateQuiz(quizHtmlArray[i], optionsHtmlArray[i], answersHtmlArray[i]);
}


/************************* caller function********** */
function main()
{
  for(aQuiz of quizArray)
  {
    aQuiz.setQuestion();
    aQuiz.setAnswer();
    aQuiz.renderForm();
  }
}

function handleSubmit(event){
  for(let i = 0; i < questions.length; i++){


  }


}
myForm.addEventListener('submit', handleSubmit)
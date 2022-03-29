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

let quizArray = [];

//html callers
let myForm = document.getElementById('Response-fromQuiz');
let legElem = document.getElementById('question-box');
let opt1 = document.getElementById('option1');
let opt2 = document.getElementById('option2');
let opt3 = document.getElementById('option3');
let opt4 = document.getElementById('option4');

/*******************constructor ****************** */
function GenerateQuiz(quizQuestion, quizOption, quizAnswer)
{
  this.quizQuestion = quizQuestion;//string is a question
  this.quizOption = quizOption;  //String with a,b,c,d possible options - MUST Be SPLICED@!
  this.quizAnswer = quizAnswer; //the correct answer from array -MUST Be SPliced!!
  this.resultsCounter; //quiz score - will be tallied in prototype

  quizArray.push(this)

}
/******************************* Prototypes*************** */
GenerateQuiz.prototype.showQuestions = function()
{


}


GenerateQuiz.prototype.renderForm = function()
{
  let arrCont = this.quizOption.split(' ');
  legElem.textContent = this.quizQuestion;//asks the question

  for(let i = 1; i < 5; ++i)//only four options
  {
    let inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'radio');
    inputElem.setAttribute('id', 'option' + i);
    inputElem.setAttribute('name', 'optionsFamily');
    legElem.appendChild(inputElem);

    const labelElem = document.createElement('label');
    labelElem.setAttribute('for', 'option' + i);
    labelElem.textContent = arrCont[i - 1];//offset from loop
    legElem.appendChild(labelElem);
  }

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


/************************* helper functions**************** */
//function setForm()
//{}


/************************* caller function********** */
function main()
{
  //setForm();//initializes the form
  for(let aQuiz of quizArray)
  {
    //aQuiz.setQuestion();
    //aQuiz.setAnswer();
    aQuiz.renderForm();
  }
}
main();

function handleSubmit(event)
{
  event.preventDefault();
  const newUserAnswer1 = event.target.option1.checked;
  const newUserAnswer2 = event.target.option2.checked;
  const newUserAnswer3 = event.target.option3.checked;
  const newUserAnswer4 = event.target.option4.checked;

  if(newUserAnswer1){}
  if(newUserAnswer2){}
  if(newUserAnswer3){}
  if(newUserAnswer4){}
  //new set of questions after click
  new GenerateQuiz(quizHtmlArray[2], optionsHtmlArray[2], answersHtmlArray[2])

}
//************** event listener ***************************/
myForm.addEventListener('submit', handleSubmit);
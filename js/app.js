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
let arrCont = [];

//html callers
let myForm = document.getElementById('Response-fromQuiz');
let legElem = document.getElementById('questionbox');
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
  arrCont = this.quizOption.split(' ');
  //TODO: this overrides the text everytime in DOM in line 53.
  //either display:hide (every question is dynamically named differently using same element in html)
  //or wait somehow for user to answer question and kick this off again.
  legElem.textContent = this.quizQuestion;//asks the question

  for(let i = 1; i < 5; ++i)//only four options
  {
    //input creator
    let inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'radio');
    inputElem.setAttribute('id', 'option' + i);
    inputElem.setAttribute('name', 'optionsFamily');
    legElem.appendChild(inputElem);
    
    //label creator
    const labelElem = document.createElement('label');
    labelElem.setAttribute('for', 'option' + i);
    labelElem.textContent = arrCont[i - 1];//offset from loop
    legElem.appendChild(labelElem);
  }


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
  let question_Box = event.target[0].childNodes[1].firstChild.nodeValue;
  let userResponse;
  let container;
  let newUserAnswer1 = event.target.option1.checked;
  let newUserAnswer2 = event.target.option2.checked;
  let newUserAnswer3 = event.target.option3.checked;
  let newUserAnswer4 = event.target.option4.checked;

  if(newUserAnswer1){userResponse = arrCont[0];}
  if(newUserAnswer2){userResponse = arrCont[1];}
  if(newUserAnswer3){userResponse = arrCont[2];}
  if(newUserAnswer4){userResponse = arrCont[3];}
    userResponse = userResponse.split('.');
  

  /*
  loop goes through all quiz questions string in quizArray to find the correlating correct answers.
  */
  for(let question of quizArray)
  {
    if(question.quizQuestion === question_Box &&//check if we are at the right question
       question.quizAnswer === userResponse[0])//and check if the answer matches client response
    {
      alert(`you guessed ${userResponse[0]} and the answer is ${userResponse[1]}! Good job, have some points!`);
      question.resultsCounter++;//if so, tally points
      break;
    }
    else if(question.quizQuestion === question_Box &&
      question.quizAnswer !== userResponse[0])
    {
      alert("alert you were wrong! ");
      break;
    }
    //else continue searching questions till found
  }

  //new set of questions after click
  main();

}
//************** event listener ***************************/
myForm.addEventListener('submit', handleSubmit);
/*
  WARNING: these need to be in the same exact format including spaces. Otherwise, Splice wont work properly 
  also do not modify anything here. use a new array and modify content in new array instead of appending or modifying in the constants.
*/



const quizQArray = [
  //HTML Questions
  'Which of the following elements is used to create an unordered list?',
  'Which tag is used to create a hyperlink?',
  'Which of the following indicates the closing of an element tag?',
  'Select an HTML element that will be table header!',
  'Which tag will add a header to an HTML table?',

  'Which is NOT a valid HTML tag?',
  'Which of the following are used to create lists?',
  'What does the acronym “DOM” stand for?',
  'What does HTML stand for?',
  'Which of the following best describes the standard order in which HTML elements are structured?',


  //CSS Questions
  'What does CSS stand for?',
  'Which one represents correct CSS syntax?',
  'How do you insert a comment in CSS?',
  'What property changes background color of an element?',
  'Which CSS propert changes the color of text in an element?',

  'Which property changes the font of an HTML element?',
  'How do you make text bold?',
  'Which of the following selects an element by it\'s class?',
  'Which of the following selects an element by its ID?',
  'How do you select all the p elements inside of the body?',


  //JavaScript Questions
  'How do you create a multi-line comment in JavaScript?',
  'JavaScript can be utilized as a ___-side programming language?',
  'Which is true about JavaScript variable naming conventions?',
  'What is the output of the following: et person = { name: "Fred" }; const members = [person]; person = null; console.log(members);',
  'JavaScript is what type of a language?',

  'Which of the following is used to define a variable?',
  'Which of the following methods accesses HTML elements using JavaScript?',
  'How do you create a function in JavaScript?',
  'How do you call the function myFunction',
  'Which operator is used to assign a value?',

];

const answersArray = [
  'c','a','b','d','c','c','d','d','a','b', //HTML Answers
  'b','d','c','a','a','b','d','d','b','a',  //CSS Answers
  'b','c','d','d','a','d','d','b','a','a'//JavaScript Answers
];

const optionsArray = [
  //HTML options
  'a.<list>-b.<unorderedList>-c.<ul>-d.<li>',
  'a.<a>-b.<b>-c.<link>-d.<source>',
  'a.X-b./-c..-d.#',
  'a.<h1>-b.<head>-c.<th>-d.<theader>',
  'a.<h1>-b.<head>-c.<th>-d.<theader>',

  'a.<h2>-b.<p>-c.<s>-d.<head>',
  'a.<ul>-b.<ol>-c.<lists>-d.A&B',
  'a.Data Tile Magnet-b.Data Orientation Model-c.Document Object Mode-d.Document Object Model',
  'a.Hyper Text Markup Language-b.HTML Technical Markup Language-c.Hyper Tooling Modeling Language-d.High Tech Modeling Language',
  'a.<html>, <h1>, <footer>, and finally <h6>-b.<html>, <head>, <body>, and finally <footer>-c.<body>, <h1>, <head>, <html>-d.<html>, <h6>, <h2>, <p>',

  //CSS options

  'a.Capture Sheet Styles-b.Cascading Sheet Styles-c.Computer Sheet Styles-d.Cascading Style Sheets',
  'a.body color = red-b.body: color = red-c.body; color: black-d.body {color: black;}',
  'a.\‘-b.\/\/-c.\/* *\/-d.\/\/ \/\/',
  'a.background-color-b.bgcolor-c.color-d.bg-color',
  'a.color-b.text color-c.fg color-d.change text',

  'a.font weight-b.font family-c.fonts-d.font style',
  'a.font family: bold-b.style: bold-c.font.bold-d.font weight: bold',
  'a.Dot Operator-b.#-c.class=-d.none of the above',
  'a.ID=-b.#-c.Identification-d.none of the above',
  'a.body p-b.p body-c.paragraph in body-d.none of the above',

  //JavaScript options

  'a.Multi line comments start \/\/ and end with \/\/-b.Multi line comments start with \/* and end with *\/-c.Multi line comments start with COMMENT and end with COMMNET-d.Multi line comments start with *COMMENT and end with COMMNET*',
  'a.Client-b.Server-c.Both-d.Neither',
  'a.JavaScript variable names must begin with an underscore or a capital letter-b.JavaScript variable names must begin with a letter or an underscore-c.JavaScript variable names are case sensitive-d.Both B and C',
  'a. null-b.[null]-c.members-d.[{name: “Fred”}]',
  'a.Object Oriented-b.Object Based-c.Procedural-d.None of the above',

  'a.allow-b.let-c.var-d.Both B and C',
  'a.getElement-b.accessHTML-c.writetoHTML-d.getElementbyId()',
  'a.function.create.myFunction()-b.function myFunction()-c.function.myFunction()-d.function = myFunction()',
  'a.myFunction()-b.call function myFunction()-c.start myFunction()-d.function myFunction()',
  'a.=-b.==-c.===-d.is'
];

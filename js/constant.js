let quizHtmlArray = [
  'Which of the following elements is used to create an unordered list?',
  'Which tag is used to create a hyperlink?',
  'Which of the following indicates the closing of an element tag?',
  'Which tag will add a header to an HTML table?',
  'Which is NOT a valid HTML tag?',
  'Which of the following are used to create lists?'];
let quizCssArray = [];
let quizJsArray = [];

let answersHtmlArray = ['c','b','c','c','d','d',];
let answersCssArray = [];
let answersJsArray = [];

let optionsHtmlArray = [
  'a.<list> b.<unorderedList> c.<ul> d.<li>',
  'a.<a> b.<b> c.<link> d.<source>',
  'a.X b./ c.. d.#',
  'a.<h1> b.<head> c.<th> d.<theader>',
  'a.<h2> b.<p> c.<s> d.<head>',
  'a.<ul> b.<ol> c.<lists> d.A&B.'];
let optionsCssArray = [];
let optionsJsArray= [];

// 1. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d
// JavaScript Questions:
// How does a web page link to an external JavaScript file?
// a.
// b.
// c.  The JavaScript file is placed in a folder within the same general directory as the HTML file, then linked to using the script tag such as : <script src="script.js"></script>
// d.
// 1.  How do you create a multi-line comment in JavaScript?
// 	a. Multi-line comments start // and end with //
// 	b. Multi-line comments start with /* and end with */.
// 	c. Multi-line comments start with COMMENT and end with COMMNET.
// 	d. Multi-line comments start with *COMMENT and end with COMMNET*
// 2.  JavaScript can be utilized as a ___-side programming language?
// 	a. Client
// 	b. Server
// 	c. Both
// 	d. Neither
// 3. Which is true about JavaScript variable naming conventions?
// 	a. JavaScript variable names must begin with an underscore or a capital letter.
// 	b. JavaScript variable names must begin with a letter or an underscore.
// 	c. JavaScript variable names are case sensitive.
// 	d.  Both B and C.
// 4.  What is the output of the following:
// et person = { name: "Fred" };
// const members = [person];
// person = null;
// console.log(members);
// 	a. null
// 	b. [null]
// 	c. members
// 	d. [{name: “Fred”}]
// 5. JavaScript is what type of a language?
// 	a. Object-Oriented
// 	b. Object-Based
// 	c. Procedural
// 	d. None of the above
// 6. Which of the following is used to define a variable?
// 	a. allow
// 	b. let
// 	c. var
// 	d. Both B and C
// 7.  Which of the following methods accesses HTML elements using JavaScript?
// 	a. getElement
// 	b. accessHTML
// 	c. writetoHTML
// 	d. getElementbyId()
// 8. How do you create a function in JavaScript?
// 	a. function.create.myFunction()
// 	b. function myFunction()
// 	c. function.myFunction()
// 	d. function = myFunction()
// 9. How do you call the function “myFunction”
// 	a.  myFunction()
// 	b. call function myFunction()
// 	c. start myFunction()
// 	d. function myFunction()
// 10. Which operator is used to assign a value?
// 	a. =
// 	b. ==
// 	c. ===
// 	d. is
// HTML questions:
// 1. Which of the following elements is used to create an unordered list:
// 	a. <list>
// 	b. <unorderedList>
// 	c.<ul>
// 	d. <li>
// 2. Which tag is used to create a hyperlink:
// 	a. <a>
// 	b. <b>
// 	c.<link>
// 	d. <source>
// 3. Which of the following indicates the closing of an element tag?
// 	a. X
// 	b. /
// 	c. .
// 	d. #
// 4. Which tag will add a header to an HTML table?
// 	a. <h1>
// 	b. <head>
// 	c. <th>
// 	d. <theader>
// 5. Which tag will add a header to an HTML table?
// 	a. <h1>
// 	b. <head>
// 	c. <th>
// 	d. <theader>
// 6. Which is NOT a valid HTML tag?
//	a. <h2>
//	b. <p>
	//c. <s>
	//d. <head>
// 7. Which of the following are used to create lists?
// 	a. <ul>
// 	b. <ol>
// 	c. <lists>
// 	d. Both A and B.

// *
// 8. What does the acronym “DOM” stand for?
// 	a. Data Tile Magnet
// 	b. Data Orientation Model
// 	c. Document Object Mode
// 	d. Document Object Model
// 9. What does HTML stand for?
// 	a. Hyper Text Markup Language
// 	b. HTML Technical Markup Language
// 	c. Hyper Tooling Modeling Language
// 	d. High Tech Modeling Language
// 10. Which of the following best describes the standard order in which HTML elements are structured?
// 	a. <html>, <h1>, <footer>, and finally <h6>
// 	b. <html>, <head>, <body>, and finally <footer>
// 	c. <body>, <h1>, <head>, <html>
// 	d. <html>, <h6>, <h2>, <p>
// 1. Question Format
// 	a. Capture Sheet Styles
// 	b. Cascading Sheet Styles
// 	c. Computer Sheet Styles
// 	d. Cascading Style Sheets
// 2. Which one represents correct CSS syntax?
// 	a. body color = red
// 	b. body: color = red
// 	c.  body; color: black
// 	d. body {color: black;}
// 3. How do you insert a comment in CSS?
// 	a. ‘
// 	b. //
// 	c. /* */
// 	d. // //
// 4. What property changes background color of an element?
// 	a. background-color
// 	b. bgcolor
// 	c. color
// 	d. bg-color
// 5. Which CSS propert changes the color of text in an element?
// 	a. color
// 	b. text-color
// 	c. fg-color
// 	d. change-text
// 6. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d
// 7. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d
// 8. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d
// 9. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d
// 10. Question Format
// 	a. a
// 	b. b
// 	c. c
// 	d. d

/*
What is DOM manipulation?

Remember that DOM stands for Document Object Model

The DOM is a representation of the HTML structure on the page that JavaScripts can interact with

DOM manipulation simply means changing an element's text or inner html, or perhaps replacing it entirely
*/

/*
The HTML <form> element

The login, signup, and address forms you see online all share a common tag: <form>!

Inside of <form> are several elements that make up forms: text input boxes, dropdowns,
radio buttons, checkboxes, etc.

Today, we'll just be using the text and password input elements, but in future
classes you'll learn about all of them!

<form> example

<form action="/process" method="POST">
  <label for="username">Username</label>
  <input type="text" name="username" id="username">
  <label for="password">Password</label>
  <input type="password" name="password">
  <input type="submit" value="Submit">
</form>

[fit] Retrieve input from a form element
you can see what's inside of a form element fairly easily
using the .value attribute

*/

//document.getElementById('username').value
// returns the value of the field

heading = document.getElementById('title')
heading.innerText


// set name to Zach
//var name = "Zach"


// Changes the text in the DOM
//heading.innerText = "Enter " + name + "'s Information"

// inside of <h1> to say this instead
//heading.innerText

/*document.getElementById("title")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("id_of_button").click();
    }
});*/

/* In this example, we use a cross-browser solution,
because the keyCode property does not work on the
onkeypress event in Firefox. However, the which property does.

Explanation of the first line in the function below:
if the browser supports event.which, then use event.which,
otherwise use event.keyCode */

function myFunction(event) {
    var x = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;

}

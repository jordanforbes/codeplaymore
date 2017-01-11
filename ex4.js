//var secondHeader = document.getElementsByTagName('h1')[1];
//secondHeader.innerText = "New Text"

// the inner text of "secondHeader" is now set to "New Text"

/*var changer = document.querySelectorAll("#lol")
changer.innertext= "doop"
*/

//reference the document (page we're //currently on)
// document.


//lookup an element by ID
// for(i=0; i<3;i++){
// var a = document.getElementsByClassName("something")[i]
// a.innerHTML = 'Bo bo Muuuuu'
// console.log(a)
// }

var hello = document.getElementById('hello');

hello.addEventListener('click', scream);

function scream(){
  alert('helllooooooouuuuuu')
}









//attach an event handler - an anonymous
// function to execute - when the elem is //clicked
// addEventListener("click", function(event) {
//   alert('you clicked me')
// })

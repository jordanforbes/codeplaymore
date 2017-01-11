//Block Scope

//Within any "block" of code, for instance an if statement,
//variables will mantain separate values than globally scoped
//versions of the variable

//This concept does not exist in JavaScript, there is no block scope in JavaScript

/*var c = 10;

function hallo(){
  if(true){
    var c = 2;
  }
  console.log(c);
  // returns 2, not the global value 10
  // implication: variables don't have a
  // separate scope within a block
}
*/

//Function Scope

//An argument is only accessible within the function it gets declared in

/*
function haha(argument_uno){
  console.log(argument_uno);
}

haha("hello");
>>"hello"
console.log(argument_uno);
>>ReferenceError: argument_uno is not defined
*/

//Write a "cheat sheet" of runnable JavaScript code and
//comments that explain the concepts in this lecture so you have a reference

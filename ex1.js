/*//global scope

//var z = 1;

function print_it(){
  console.log(z); //Will return 1
}

var z = 3;

function some_f(z){
  console.log(z);
}
some_f(10)
//>>10

console.log(z);
//>>3

var z = 3;

function some_f(){
  var z = 20;
  console.log(z);
}
some_f()
>>20

console.log(z);
>>3*/

//Create a script that exemplifies global scope and
//local scope by logging a variable to the console.

var x = 10;

function func(){
  var x = 2;
  console.log(x)
}
console.log(x)

func()

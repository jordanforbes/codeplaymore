//global scope

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

//Create an HTML page with two buttons that argue with
//each other. When one button is clicked,
//the text "I'm right" should be placed next to it.
//When the other button is clicked, the text is replaced with,
//"No, I'm right!"




thingone.addEventListener('click', imRight);
thingtwo.addEventListener('click', noImRight);

function imRight(){
  document.getElementById('thingone').innerHTML = "<h1>Yes I'm right</h1>"
}

function noImRight(){
  document.getElementById('thingone').innerHTML ="<h1>Yes No, I'm right!</h1>"
}

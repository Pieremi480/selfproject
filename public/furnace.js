// function will proceded when the yes button is pressed on door 1 
function door1() {
  var txt;
  var question = prompt(
    "What shows hidden files in a raspberry pi?",
    "XX XX"
  );
  if (question == "LS -A") {
   txt = "The Door Opens"
    document.write(txt.link("/walkway"));
  } else {
    txt = "Door will not open.";
  }
  document.getElementById("demo").innerHTML = txt;
}

// function will proceded when the yes button is pressed on door 2
function door2() {
  var txt2;
  var question = prompt(
    "What command is used to shutdown a raspberry pi?",
    "XXXX XXXXXXXX"
  );
  if (question == "SUDO SHUTDOWN") {
   txt2 = "The Door Opens"
    document.write(txt2.link("/pit"));
  } else {
    txt2 = "Door will not open.";
  }
  document.getElementById("demo2").innerHTML = txt2;
}

// function will proceded when the yes button is pressed on door 3
function door3() {
  var txt3;
  var question = prompt(
    "What are the three code languages we used?",
    "XXXX, XXX, XX"
  );
  if (question == "HTML, CSS, JS") {
   txt3 = "The Door Opens"
    document.write(txt3.link("/codeRoom"));
  } else {
    txt3 = "Door will not open.";
  }
  document.getElementById("demo3").innerHTML = txt3;
}

// function will proceded when the no button is pressed it will ask if you are sure if so it will send you back to the begaing screen or if cancled nothing will happen
function exit() {
  var txt4;
  var question = prompt(
    "are you sure",
    "XXX"
  );
  if (question == "YES") {
   txt4 = "Walk away"
    document.write(txt4.link("/furnace"));
  } 
  document.getElementById("demo4").innerHTML = txt4;
}
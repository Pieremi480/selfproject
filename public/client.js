// function will proceded when the yes button is pressed on door 1 
function door1() {
  var txt;
  var question = prompt(
    "What are the three code languages we used?",
    "XXXX, XXX, XX"
  );
  if (question == "HTML, CSS, JS") {
   txt = "The Door Opens"
    document.write(txt.link("/codeRoom"));
  } else {
    txt = "Door will not open.";
  }
  document.getElementById("demo").innerHTML = txt;
}

// function will proceded when the yes button is pressed on door 2
function door2() {
  var txt2;
  var question = prompt(
    "What does API stand for",
    "*ALL CAPS*"
  );
  if (question == "APPLICATION PROGRAMMING INTERFACE") {
   txt2 = "The Door Opens"
    document.write(txt2.link("/bedroom"));
  } else {
    txt2 = "Door will not open.";
  }
  document.getElementById("demo2").innerHTML = txt2;
}

// function will proceded when the yes button is pressed on door 3
function door3() {
  var txt3;
  var question = prompt(
    "What is an example of a free front-end framework for faster and easier web development?",
    "XXXXXXXXX"
  );
  if (question == "BOOTSTRAP") {
   txt3 = "The Door Opens"
    document.write(txt3.link("/kitchen"));
  } else {
    txt3 = "Door will not open.";
  }
  document.getElementById("demo3").innerHTML = txt3;
}

// function will proceded when the yes button is pressed on door 4
function door4() {
  var txt4;
  var question = prompt(
    "What can you do to cheek if your external javascript is linked properly to your html",
    "XXXXX"
  );
  if (question == "ALERT") {
   txt4 = "The Door Opens"
    document.write(txt4.link("/livingRoom"));
  } else {
    txt4 = "Door will not open.";
  }
  document.getElementById("demo4").innerHTML = txt4;
}

// function will proceded when the no button is pressed it will ask if you are sure if so it will send you back to the begaing screen or if cancled nothing will happen
function exit() {
  var txt5;
  var question = prompt(
    "are you sure",
    "XXX"
  );
  if (question == "YES") {
   txt5 = "Walk away"
    document.write(txt5.link("/"));
  } 
  document.getElementById("demo5").innerHTML = txt5;
}
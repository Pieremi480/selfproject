// function will proceded when the yes button is pressed on door 1
function door1() {
  var txt;
  var question = prompt(
    "What does API stand for",
    "*ALL CAPS*"
  );
  if (question == "APPLICATION PROGRAMMING INTERFACE") {
   txt = "The Door Opens"
    document.write(txt.link("/bedroom"));
  } else {
    txt = "Door will not open.";
  }
  document.getElementById("demo").innerHTML = txt;
}

// function will proceded when the yes button is pressed on door 2
function door2() {
  var txt2;
  var question = prompt(
    "What is an example of a free front-end framework for faster and easier web development?",
    "XXXXXXXXX"
  );
  if (question == "BOOTSTRAP") {
   txt2 = "The Door Opens"
    document.write(txt2.link("/kitchen"));
  } else {
    txt2 = "Door will not open.";
  }
  document.getElementById("demo2").innerHTML = txt2;
}

// function will proceded when the yes button is pressed on door 3
function door3() {
  var txt3;
  var question = prompt(
    "Which of the following is the proper start to an array a) var b =[]; b)[var b] c)var array d) b=array",
    "X"
  );
  if (question == "A") {
   txt3 = "The Door Opens"
    document.write(txt3.link("/testRoom"));
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
    document.write(txt4.link("/livingRoom"));
  } 
  document.getElementById("demo4").innerHTML = txt4;
}
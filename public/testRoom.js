// function will proceded when the yes button is pressed on door 1 
function door1() {
  var txt;
  var question = prompt(
    "What can you do to cheek if your external javascript is linked properly to your html",
    "XXXXX"
  );
  if (question == "ALERT") {
   txt = "The Door Opens"
    document.write(txt.link("/livingRoom"));
  } else {
    txt = "Door will not open.";
  }
  document.getElementById("demo").innerHTML = txt;
}

// function will proceded when the no button is pressed it will ask if you are sure if so it will send you back to the begaing screen or if cancled nothing will happen
function exit() {
  var txt;
  var question = prompt(
    "are you sure",
    "XXX"
  );
  if (question == "YES") {
   txt = "Walk away"
    document.write(txt.link("/testRoom"));
  } 
  document.getElementById("demo3").innerHTML = txt;
}
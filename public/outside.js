// function will proceded when the yes button is pressed on restart
function restart() {
  var txt;
  var question = prompt("Would you like to restart", "XXX");
  if (question == "YES") {
    txt = "Restart";
    document.write(txt.link("/"));
  } else {
    txt = "OK thanks for playing";
  }
  document.getElementById("demo").innerHTML = txt;
}

function exit() {
  var txt4;
  var question = prompt("are you sure", "XXX");
  if (question == "YES") {
    txt4 = "Thanks for playing";
    document.write(txt4.link("/"));
  }
  document.getElementById("demo4").innerHTML = txt4;
}

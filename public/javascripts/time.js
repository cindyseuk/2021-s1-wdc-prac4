//task 4-1
function timestamp(){
    //new AJAX request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("time").innerHTML =  this.responseText;
    }
  };

    //open connection
    xhttp.open("GET", "/last.txt", true);

    //send request
    xhttp.send();
}

//task 4-2
function getColor(){
      //new AJAX request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("head").style.color =  this.responseText;
      document.getElementById("head").innerHTML =  this.responseText;
    }
  };

    //open connection
    xhttp.open("GET", "/color.txt", true);

    //send request
    xhttp.send();

}

//task 4-3
function log(){
    //new AJAX request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var arr = JSON.parse(this.responseText);
      logList(arr);
    }
  };

    //open connection
    xhttp.open("GET", "/log.json", true);

    //send request
    xhttp.send();
}

function logList(arr){

  var list="<ul>";

  for (var i=0; i<arr.length; i++){
    list += "<li>" + arr[i] + "</li>";
  }
  list+= "</ul>";

  document.getElementById("log").innerHTML = list;

}

function logTime(){

  //set timer for 10secs
  setInterval(function log(){

    //new AJAX request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var arr = JSON.parse(this.responseText);
      logList(arr);
    }
  };
    //open connection
    xhttp.open("GET", "/log-ro.json", true);

    //send request
    xhttp.send();
  },10000);

}

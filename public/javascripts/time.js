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
      document.getElementById("head").innerHTML =  this.responseText;
    }
  };

    //open connection
    xhttp.open("GET", "/color.txt", true);

    //send request
    xhttp.send();

}

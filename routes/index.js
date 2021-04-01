var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//task 3-1
var visits=0;
router.get('/last.txt', function(req, res, next) {
  var date = new Date();
  var time = new Date();
  if (visits>0){
    time.setDate(date.getDate()-1) ;
    res.send(String(time));
  }else {
    visits++;
    res.send("");
  }
});

//task 3-2
var count = 0;
var colors= ['red', 'yellow', 'green', 'blue'];
router.get('/color.html', function(req, res, next){

  if (count == 0){
     res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <h1 style="color:red">red </h1>
            </body>
        </html>`);
  }

  if (count == 1){
     res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <h1 style="color:yellow"> yellow </h1>

            </body>
        </html>`);
  }
  if (count == 2){
     res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <h1 style="color:green"> green </h1>

            </body>
        </html>`);
  }
  if (count == 3){
     res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <h1 style="color:blue"> blue </h1>

            </body>
        </html>`);
  }

  count++;
  if (count>3){
    count =0;
  }

     /* res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <h1 style=color:"${colors[i]}">${colors[i]} </h1>

            </body>
        </html>`);*/
});

//task 3-3
var dates = [];
router.get('/log.html', function(req, res, next) {

  var timestamp = new Date();
  dates.push(String(timestamp));
  var times="";

  for (var i=0; i<dates.length; i++){
    times+= "<li>" + dates[i] + "</li>";
  }

  res.send(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>task3-2</title>
            </head>
            <body>
                <ul>${times}</ul>
            </body>
        </html>`);
});

//task 4-1


module.exports = router;

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
  if (visits>1){
    time.setDate(date.getDate()-1) ;
    res.send(String(time));
  }else {
    visits++;
    res.send("");
  }
});

//task 3-2
router.get('/color.html', function(req, res, next){

});

module.exports = router;

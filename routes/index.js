var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var visits=0;
router.get('/last.txt', function(req, res, next) {
  var date = new Date();
  var time = date.getTime()-1;
  if (visits>1){
    res.send(String(time));
  }else {
    visits++;
    res.end();
  }

});

module.exports = router;

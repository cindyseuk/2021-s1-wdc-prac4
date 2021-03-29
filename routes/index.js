var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var visits=0;
router.get('/last.txt', function(req, res, next) {
  visits++;
  var date = new Date();
  if (visits>1){
    res.send(String(date));
  }

});

module.exports = router;

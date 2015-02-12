var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SSJS Injection Test Case' });
});



/* 
Source : http://s1gnalcha0s.github.io/node/2015/01/31/SSJS-webshell-injection.html
*/
router.post('/', function(req, res){
	   
	   var year = eval("year = (" + req.body.year + ")");
	   var date  = new Date();

	   var futureAge = 2050 - year; 

	   console.log(futureAge);
	   res.end(futureAge);
});




module.exports = router;

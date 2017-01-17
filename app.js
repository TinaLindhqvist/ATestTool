var express = require('express');
var cfenv = require('cfenv');
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.set('view engine', 'ejs');
app.get('/', function(req, res){
	res.render('index');
});

app.use(express.static(__dirname + '/public')); 

var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
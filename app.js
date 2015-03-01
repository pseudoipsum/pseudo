var express = require('express'),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use a render
  res.render('index.ejs');
});

app.listen(process.env.PORT || 3000, function() {
	console.log(new Array("*").join());
	console.log("STARTED ON localhost:3000");
});
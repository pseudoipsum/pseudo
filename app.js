var express = require('express'),
  	bodyParser = require('body-parser'),
  	ejs = require('ejs'),
  	Gun = require('gun'),
  	gun = Gun({file:"data.json"}),
    request = require("request"),
    async = require("async"),
  	app = express();


gun.attach(app);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// app.get("/", function (req, res) {
//   console.log('Got homepage');

// async.parallel([
//       function(callback){
//         console.log('Got 1');
//         //Best Buy
//           request('http://api.remix.bestbuy.com/v1/products(sku=4961487)?show=name,longDescription,%20regularPrice&pageSize=1&page=1&apiKey=z34g2b4eqby8krm55rev4trj&format=json', function(err, resp, body){
//               callback(null, JSON.parse(body)[0]);
//           });
//       },
//       function(callback){
//         console.log('Got 2');
//         //Expedia
//           request('http://terminal2.expedia.com/packages?departureDate=2015-04-20&originAirport=SEA&destinationAirport=LHR&returnDate=2015-04-22&regionid=6000479&adults=2&limit=1&nonstop=true&apikey=mDh5jYyXXqxC1ARt8dYvgonmQtZMYRQ', function(err, resp, body){
//               callback(null, JSON.parse(body)[1]);
//           });
//       }
//     ],
//       function(err, results){
//         console.log('Got callback');
// console.log(results);
//       res.render('index.ejs', {taco: results});
//     });
// });

app.get('/', function(req, res){
  // use a render
  res.render('index.ejs');
});

app.get('/angular', function(req, res){
  res.render('angular.ejs');
});



app.listen(process.env.PORT || 3000, function() {
	console.log(new Array("*").join());
	console.log("STARTED ON localhost:3000");
});
/////////////////////////NODE HTTP SERVER///////////////////////////////////////////////////
//import http module
//var http =  require('http');
//Handle sending requests and returning responses
//function handleRquests(req,res) {
//	res.end('hello world');
//}
//Create Server
//var server = http.createServer(handleRquests);

//Start server and listen on port x
//server.listen(8080, function(){
//	console.log('Listening on Port 8080');
//})
/////////////////////////EXPRESS///////////////////////////////////////////////////
// require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//Use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Use Body Parser
app.use(bodyParser.urlencoded()); //Allows to parsed URL encode Bodys to Javascript Object


//router
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, ect) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
	console.log('app started');
});
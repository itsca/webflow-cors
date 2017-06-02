/////////////////////////EXPRESS///////////////////////////////////////////////////
// require our dependencies
var express = require('express');
var cors = require('cors');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

//use cors
app.use(cors());

//Use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Use Body Parser
app.use(bodyParser.urlencoded({ //Allows to parsed URL encode Bodys to Javascript Object
    extended: true
}));
app.use(bodyParser.json());

//router
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, ect) location
app.use(express.static(__dirname + '/public'));

// start the app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//require express
var express = require('express');
//nodes path 
var path = require('path');
//create router object
var router = express.Router();

//export router
module.exports = router;

//route for home page
router.get('/', function(req, res) {
	//res.send('HOME PAGE');
	//__dirname extracts the current file directory
	//res.sendFile(path.join(__dirname, '../index.html'));
	//With Render when ejs is active
	res.render('pages/home');
});

//route about page
router.get('/about', function(req, res) {
	var users = [
		{name: "Nombre 1", email:"prueba1@gmail.com", avatar: "http://placekitten.com/200/300"},
		{name: "Nombre 2", email:"prueba2@gmail.com", avatar: "http://placekitten.com/300/300"},
		{name: "Nombre 3", email:"prueba3@gmail.com", avatar: "http://placekitten.com/400/300"}
	];

	res.render('pages/about', {users: users});
});

//route contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res) {
	console.log(req)
	res.send('Thanks for Contacting us, ' + req.body.name + ' we will get back to you soon');
});

//webFlow API routes
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});


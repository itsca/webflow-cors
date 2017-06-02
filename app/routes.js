//require express
var express = require('express');
//require webflow
const Webflow = require('webflow-api');
//nodes path 
var path = require('path');
//create router object
var router = express.Router();

//export router
module.exports = router;

////Routes
///webFlow API routes
//sites
router.post('/webflow/sites', function(req, res) {
	var api = new Webflow({ token: req.body.apiToken});
    //Webflow API Request
    // Promise <[ Item ]>
    var sites = api.sites().then(items => res.send(items));
});
//collections
router.post('/webflow/collections', function(req, res) {
	var api = new Webflow({ token: req.body.apiToken});
    //Webflow API Request
    // Promise <[ Item ]>
    var collections = api.collections({ siteId: req.body.siteId }).then(items => res.send(items));
});
//items
router.post('/webflow/items', function(req, res) {
	console.log(req)
	var api = new Webflow({ token: req.body.apiToken});
    //Webflow API Request
    // Promise <[ Item ]>
    var getProyects = api.items({ collectionId: req.body.collectionId }).then(items => res.send(items));
});


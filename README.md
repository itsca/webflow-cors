# A heroku app to return webflow requests with CORS headers.

I was experimenting with the idea of using webflow cms and api to create a web app with angular but i was getting a cors error on angular do to the app runing on a client so i created a heroku app that takes the api token and either the site id or the collection id to make the query on webflow api on the server and will return the same response but with added CORS headers.

## Getting Started

All you need to do is send your request to the heroku app instead of the webdlow api with a POST metod and a body parameter that includes the api token and either the site Id for a collection or a collection Id for a site.

### Prerequisites

A webflow site with a collection and some items, some way of making a POST request with a JSON body, like POSTMAN or angular.js for example.

```
Give examples
```

### Installing

Nothing to install!

## Running the tests

You need to send a POST request to one of the apps URLS and include a request body JSON object with the data that the request needs

### Looking for a site

Get Information about the site.

URL : https://webflow-cors.herokuapp.com/webflow/sites

Body : {
    "apiToken" : "YOUR API TOKEN"
}

####Example in Angular 1

```
var _requestBody = {
    	"apiToken" : "YOUR API TOKEN"
	};

function() {
        var result = {};
        var url = 'https://webflow-cors.herokuapp.com/webflow/sites';
        var requestBody = _requestBody;
        result = $http.post(url, _requestBody);
        return result
    }
```

### Getting site's collections

Get list of collections in a site.

URL : https://webflow-cors.herokuapp.com/webflow/collections

Body : {
    "apiToken" : "YOUR API TOKEN"
}

####Example in Angular 1

```
var _requestBody = {
    	"apiToken" : "YOUR API TOKEN"
	};

function() {
        var result = {};
        var url = 'https://webflow-cors.herokuapp.com/webflow/collections';
        var requestBody = _requestBody;
        result = $http.post(url, _requestBody);
        return result
    }
```

### Getting collections items

Get list of items in a collection.

URL : http://localhost:8080/webflow/collections

Body : {
    "apiToken" : "YOUR API TOKEN",
    "collectionId" : "YOUR COLLECTION ID"
}

####Example in Angular 1

```
var _requestBody = {
    	"apiToken" : "YOUR API TOKEN",
    	"collectionId" : "YOUR COLLECTION ID"
	};

function() {
        var result = {};
        var url = 'https://webflow-cors.herokuapp.com/webflow/items';
        var requestBody = _requestBody;
        result = $http.post(url, _requestBody);
        return result
    }
```

## Built With

* [heroku](https://dashboard.heroku.com/apps) - The cloud plataform
* [NodeJs](https://nodejs.org/en/)

## Author

* **Javier Escalante**
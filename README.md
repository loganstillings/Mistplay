# Mistplay

A simple endpoint for searching a list of games in the context of a virtually scrolled typeahead. Written in Node.js

## Getting Started

Run npm install to install the packages

```
npm install
```

Serve the endpoint

```
npm run start
```

### Using Postman to test the API

I tested the endpoint by using Postman

Create a post request using localhost:8000/search

Change the Content-Type Header to be application/json

Create the request body as raw json:

```
{
	"currentIndex": 0,
	"searchText": "sonic"
}
```

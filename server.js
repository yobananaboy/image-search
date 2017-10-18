// server.js
// where your node app starts

// init project
var request = require('request');
var express = require('express');
var app = express();
var router = express.Router();
var start = 1;
var param = '';
var count = 1;

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DB_PORT+'/'+process.env.DB;

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// connect to database
MongoClient.connect(uri, (err, db) => {
  // handle error connecting to database
  if(err) throw err;
  
  var historyCollection = db.collection(process.env.COLLECTION);
  
  // http://expressjs.com/en/starter/static-files.html
  app.use(express.static('public'));
  app.use('/api/imagesearch', router);
  
  // for displaying index with instructions
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });
  
  // for searching for images
  router.get('/:search', (req, res) => {
    var param = req.params.search;
    console.log(param);
    if(!param) {
      serveErrorJson(res);
    }
    if(req.query.start) {
      start = req.query.start;
    }
    if(req.query.offset) {
      start = offsetCalc(req.query.offset);
    }
    request
      .get('https://www.googleapis.com/customsearch/v1?key='+process.env.API_KEY+'&cx='+process.env.SEARCH_ENGINE_ID+'&q='+param+'&searchType=image&start='+start, {json: true}, (err, req, body) => {
        // nextid for history item you will be adding
        var nextId = 0;
        // handle error
        if(err) {
          throw err;
          serveErrorJson(res);
        }
        // loop through results to create json
        var json = [];
        var imgArr = body.items;
        imgArr.forEach((img) => {
          json.push({
            url: img.link,
            snippet: img.title,
            context: img.image.contextLink
          });
        });
        // update database - id will be length of results array
        var histArray = historyCollection.find({}, {_id: 1}).toArray((err, res) => {
          if(err) throw err;
          nextId = res.length;
          var time = new Date().toString();
          historyCollection.insert({
            _id: nextId,
            search: param,
            when: time
          }, (err, res) => {
            if (err) throw err;
            console.log(res);
          });
        });
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(json));
    });
  });

  // for handling user viewing history
  app.get('/api/latest/imagesearch/', (request, response) => {
    var json = [];
    historyCollection.find({}, {search: 1, when: 1}).toArray((err, res) => {
      if(err) throw err;
      res.forEach((item, index) => {
        if(index >= res.length - 10) {
          json.push({
            search: item.search,
            when: item.when
          });
        }
      });
      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(json));
    });
  });
  
  // error handling
  app.get('*', (req, res, next) => {
    var err = new Error();
    err.status = 404;
    next(err);
  });

  // handling 404 errors
  app.use(function(err, req, res, next) {
    if(err.status !== 404) {
      return next();
    }

    res.send(err.message || "Whoops! That page doesn't exist.");
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // listen for requests :)
  var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  
  function serveErrorJson(res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({error: 'Search in incorrect format. Please double check and try again.'}));
  }
  
  function offsetCalc(offset) {
    start = ((offset - 1) * 10) + 1;
    return start;
  }
  
});
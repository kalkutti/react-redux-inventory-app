
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Disable caching so we'll always get the latest.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


app.get('/api/shop/', function(req, res) {
  fs.readFile(DATA_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});


app.post('/api/shop/add', function(req, res) {
  fs.readFile(DATA_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    var items = JSON.parse(data);
    var item  = {
      id: req.body.id ? parseInt(req.body.id) : Date.now(),
      name: req.body.name,
      desc: req.body.desc,
      date: req.body.date,
      tax: req.body.tax,
      price: req.body.price
    };

    items.push(item);

    // write the new data.
    fs.writeFile(DATA_FILE, JSON.stringify(items, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(item);
    });
    
  });
});


app.post('/api/shop/remove', function(req, res) {
  fs.readFile(DATA_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var items = JSON.parse(data);
    var id    = parseInt(req.body.id);
    var found = items.findIndex( (item) => item.id === id );
    if (found > -1) {
      var old = items[found];
      items = [
        ...items.slice(0, found),
        ...items.slice(found + 1)
      ];

      // write the new data.
      fs.writeFile(DATA_FILE, JSON.stringify(items, null, 4), function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        res.json(old);
      });

    } else {
      res.json({id:-1});
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

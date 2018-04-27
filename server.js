// var http = require("http");
// var connect = require('connect');

// console.log('\n\n--- Node Version: ' + process.version + ' ---');

// // Set up Connect routing
// var app = connect()
//     .use(connect.static(__dirname + '/'))
//     .use(function(req, res) {
//         console.log('Could not find handler for: ' + req.url);
//         res.end('Could not find handler for: ' + req.url);
//     })
//     .use(function(err, req, res, next) {
//         console.log('Error trapped by Connect: ' + err.message + ' : ' + err.stack);
//         res.end('Error trapped by Connect: ' + err.message);
//     });

// // Start node server listening on specified port -----
// http.createServer(app).listen(80);

// console.log('HTTP server listening on port 80');var http = require("http");
// var connect = require('connect');

// console.log('\n\n--- Node Version: ' + process.version + ' ---');

// // Set up Connect routing
// var app = connect()
//     .use(connect.static(__dirname + '/'))
//     .use(function(req, res) {
//         console.log('Could not find handler for: ' + req.url);
//         res.end('Could not find handler for: ' + req.url);
//     })
//     .use(function(err, req, res, next) {
//         console.log('Error trapped by Connect: ' + err.message + ' : ' + err.stack);
//         res.end('Error trapped by Connect: ' + err.message);
//     });

// // Start node server listening on specified port -----
// http.createServer(app).listen(80);

// console.log('HTTP server listening on port 80');

// const express = require('express');

// var app = express();

// pp.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

// app.all(/.*/, function(req, res, next) {
//   var host = req.header("host");
//   if (host.match(/^www\..*/i)) {
//     next();
//   } else {
//     res.redirect(301, "http://www." + host + req.url);
//   }
// });



// app.use('/',express.static('public', { maxage: '1d' }));

var express = require("express");
var app = express();

//Redirect web.com to www.web.com
app.all(/.*/, function (req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host + req.url);
  }
});

/* serves main page */
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
  console.log('static file request : ' + req.params);
  if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/css/") === 0 || req.url.indexOf("/js/") === 0) {
    res.setHeader("Cache-Control", "public, max-age=3600000");
    res.setHeader("Expires", new Date(Date.now() + 3600000).toUTCString());
  }
  res.sendFile(__dirname + req.params[0]);
});

// app.get('/*', function (req, res, next) {

//   if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/css/") === 0) {
//     res.setHeader("Cache-Control", "public, max-age=3600000");
//     res.setHeader("Expires", new Date(Date.now() + 3600000).toUTCString());
//   }
//   next();
// });

var port = process.env.PORT || 3333;

app.listen(port, function () {
  console.log("Listening on " + port);
});
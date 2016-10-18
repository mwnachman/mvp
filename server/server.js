var http = require('http');
var express = require('express');
var db = require('./db')
var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var morgan = require('morgan');
var parser = require('body-parser');
var router = require('./router');


var port = 3000;

// Angular has to run on live-server, though, so not sure how to 
// deal with this if I incorporate Angular.
var ip = '127.0.0.1';


var app = express();
module.exports.app = app;

app.set('port', 3000);
// app.use(morgan('dev'));
// app.use(parser.json());


// Instead have a router to tell the server
// what path to take?? 

app.use('/quiz', router);

//pass the name of the directory that contains the 
//static client files so they can be loaded
app.use(express.static(__dirname + '/../public'));

// var server = http.createServer( function(req, res) {
//   if (req.method === 'GET') {
//     utils.get(req, res);
//   } else if (req.method === 'POST'){
//     console.log('posting', req.method);
//     utils.post(req, res);
//   } else {
//     utils.send404(res);
//   }
// });

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}















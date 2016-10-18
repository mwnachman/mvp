var http = require('http');
var express = require('express');
var db = require('./db')
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var parser = require('body-parser');
var router = require('./router');

// Angular has to run on live-server, though, so not sure how to 
// deal with this if I incorporate Angular.

var app = express();
module.exports.app = app;

app.set('port', 3000);
app.use(parser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/quiz', router);

//pass the name of the directory that contains the 
//static client files so they can be loaded
app.use(express.static(__dirname + '/../public'));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}















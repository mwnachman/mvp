var http = require('http');
var utils = require('utils');

var port = 3000;


// Angular has to run on lives-server, though, so not sure how to 
// deal with this.
var ip = '127.0.0.1';


// The function we pass to http.createServer will 
//be used to handle all incoming requests.
//
// After creating the server, 
//we will tell it to listen on the given port and IP. */
//
// We need to have a router to tell the server
//what path to take                 



var server = http.createServer( function(req, res) {
  
  // console.log('headers', req.headers);
  // console.log('hello client');
  res.write('writing');
  res.end();

});

server.listen(port, ip);
console.log('server listening');
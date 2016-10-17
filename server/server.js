var http = require('http');
var fs = require('fs');
var path = require('path');
var utils = require('./utils');

var port = 3000;


// Angular has to run on lives-server, though, so not sure how to 
// deal with this if I incorporate Angular.
var ip = '127.0.0.1';


var mimeLookup = {
  '.js': 'application/javascript',
  '.html': 'text/html'
};


// Instead have a router to tell the server
// what path to take??                 



var server = http.createServer( function(req, res) {
  if (req.method === 'GET') {
    var fileurl;
    if (req.url === '/') {
      fileurl = '/index.html';
    } else {
      fileurl = req.url;
    }
    var filepath = path.resolve('./public' + fileurl);
    var fileExt = path.extname(filepath);
    var mimeType = mimeLookup[fileExt];
    if (!mimeType) {
      utils.send404(res);
      return;
    }
    fs.exists(filepath, function(exists) {
      // console.log('filepath', filepath);
      res.writeHead(200, {'Content-Type': mimeType});
      fs.createReadStream(filepath).pipe(res);
    });
  } else {
    utils.send404(res);
  }
});

server.listen(port, ip);
console.log('server listening');










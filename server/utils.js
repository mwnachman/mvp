var fs = require('fs');
var path = require('path');
var db = require('./db');



// var mimeLookup = {
//   '.js': 'application/javascript',
//   '.html': 'text/html'
// };

exports.get = function(req, res) {
  // var fileurl;
  // if (req.url === '/') {
  //   fileurl = '/index.html';
  // }
  // else 
  //   fileurl = req.url;
  // }
  // var filepath = path.resolve('../public' + fileurl);
  // var fileExt = path.extname(filepath);
  // var mimeType = mimeLookup[fileExt];
  // if (!mimeType) {
  //   exports.send404(res);
  //   return;
  // }
  // fs.exists(filepath, function(exists) {
  //   console.log('filepath', filepath);
  //   res.writeHead(200, {'Content-Type': mimeType});
  //   fs.createReadStream(filepath).pipe(res);
  // });
};


exports.post = function() {
  
  db.connection.query('')


  //   console.log('url', req.url);
  // if (req.url === '/score') {

  // }
  // req.on('data'), function(data) {
  //   console.log('data', data);
  // };
};

exports.getScore = function() {

};


exports.send404 = function(res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Error 404: Resource not found.');
  res.end();
};
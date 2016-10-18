var fs = require('fs');
var path = require('path');
var request = require('request');
var url = require('url');
var dbHelpers = require('./dbHelpers');
// var db = require('./db');


exports.post = function(req, res) {
  dbHelpers.postData(req.body.email, req.body.score);
  
  console.log('in post');
  console.log('email', req.body.email);
  console.log('score', req.body.score);
  
  // var encoding = {encoding: 'utf8'};
  // fs.readFile( '/results.html', encoding, function(err, data) {
  //   if (err) {
  //     // file doesn't exist in public!
  //     exports.send404(res);
  //   } else {
  //     console.log('else in read file');
  //     res.writeHead(200);

  // var pathname = path.resolve('/../public/results.html');
  // console.log('pathname', pathname);
  // res.writeHead(200, {Location: pathname});
  res.end();
};




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

exports.send404 = function(res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('Error 404: Resource not found.');
  res.end();
};


// exports.headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'content-type, accept',
//   // 'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'text/html'
// };

// exports.serveResults = function(res, asset, callback) {
//   console.log('in serve results');
//   var encoding = {encoding: 'utf8'};
//   fs.readFile( '../public/results.html', encoding, function(err, data) {
//     if (err) {
//       // file doesn't exist in public!
//       console.log("error in serve results", err);
//       // callback ? callback() : exports.send404(res);
//     } else {
//       console.log('in else');
//       res.writeHead(200, {Location: location});
//       // res.setHeader('Content-Type', 'text, html');
//       exports.sendResponse(res, data);
//     }
//   });
// };

// exports.sendRedirect = function(response, location, status) {
//   status = status || 302;
//   response.writeHead(status, {Location: location});
//   response.end(); 
// };

// exports.sendResponse = function(res, obj, status) {
//   status = status || 200;
//   res.writeHead(status);
//   res.end(obj);
// };

  // res.sendFile(pathname);

    // }
  // });
  // console.log('in post, data.email etc', req.params);
  
  // dbHelpers.post(req.data.email, req.data.score);
  // res.writeHead(200);
  // res.
  // exports.serveResults(res);

// exports.options = function(req, res) {
//   console.log('in options');
//   exports.sendResponse(res, "in options", 200);
// };

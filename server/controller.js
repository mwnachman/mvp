var fs = require('fs');
var path = require('path');
var request = require('request');
var url = require('url');
var dbHelpers = require('./dbHelpers');
// var db = require('./db');


exports.post = function(req, res) {
  var total = 0;
  var counter = 0;
  var average;
  dbHelpers.postData(req.body.email, req.body.score)
    .then(function(rows) {
      console.log('rows', rows);
      rows.forEach(function(row) {
        console.log('score', row.score);
        total += Number(row.score);
        counter++;
        console.log('total', total);
      });
      console.log('average', total / counter);
      average = total / counter;
      var responseObj = {average: average}
      res.json(responseObj);
    });

  // console.log('in post');
  // console.log('average', average);
  // var avg = String(average);
  // console.log('avg', avg);
  // res.end(avg);
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

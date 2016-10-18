var db = require('./db');


exports.postData = function(email, score) {

  console.log('in db helpers func', email, score);
  var dataToPost = {id: null, email: email, score: score};
  console.log(dataToPost);

  db.connection.query('INSERT INTO users SET ?', dataToPost, function(err, result) {
  	if (err) {
  		console.log(err);
  	} else {
  		console.log("whew");
  	}
  });	

};
var mysql = require('mysql');

exports.connection = mysql.createConnection({
	user: 'root',
	password: 'pee',
	database: 'personality_test'
});

exports.connection.connect();
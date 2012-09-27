var mysql = require("mysql");
var dbconf = {
	host: 'localhost',
	port: 3306,
	user: 'fortune',
	password: 'shhhh!',
	database: 'fortune'
};

this.getFortune = function(callback, categoryId){
	var client = mysql.createClient(dbconf);
	var params = [];
	
	// the basic query
	var query = "SELECT fortune FROM Fortune ";

	// if we have a categoryId limit our resuts to that
	if(categoryId){
		query += "WHERE categoryId = ? ";
		params.push(categoryId);
	}
	
	// get a random record
	query += "ORDER BY RAND() LIMIT 0,1";

	// run the query
	client.query(
		query,
		params,
		function(err, results, fields){
			client.end();
			if(err) throw(err);
			// call back with our results
			callback(results[0].fortune);
		}
	);
}

this.listCategories = function(callback){
	var client = mysql.createClient(dbconf);

	// the basic query
	var query = "SELECT * FROM Category ORDER BY category ";

	// run the query
	client.query(
			query,
			[],
			function(err, results, fields){
				client.end();
				if(err) throw(err);
				// call back with our results
				callback(results);
			}
	);
}

this.getCategory = function(categoryId, callback){
	var client = mysql.createClient(dbconf);
	
	// the basic query
	var query = "SELECT category FROM Category WHERE categoryId = ? ";

	// run the query
	client.query(
			query,
			[categoryId], // pass the categoryId in as a param
			function(err, results, fields){
				client.end();
				if(err) throw(err);
				// call back with our category name
				callback(results[0].category);
			}
	);
}
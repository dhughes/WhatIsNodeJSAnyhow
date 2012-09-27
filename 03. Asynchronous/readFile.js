// require loads a library we depend on
var http = require("http");
var fs = require("fs");

// use the http library to create an http server
var s = http.createServer(function(req, res){
	// write http headers
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// reads the entire file and then returns it via http
	fs.readFile('war and peace.txt', function (err, data) {
		// if there was an error, throw it
		if (err) throw err;
		
		// output the data we read
		res.end(data);
		
	});
	
	
});

// listen on port 8080
s.listen(8080);
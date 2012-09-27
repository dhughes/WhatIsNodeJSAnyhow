// require loads a library we depend on
var http = require("http");

// use the http library to create an http server
var s = http.createServer(function(req, res){
	// write http headers
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// write the body
	res.end("Hello Web");
});

// listen on port 8080
s.listen(8080);
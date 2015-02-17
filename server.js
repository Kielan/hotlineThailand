var http = require('http');
var fs = require('fs');
var url = require('url');

//so if you don't add a response.end() to the function object it loads foreva.
var server = http.createServer(function(request, response) {
	var domain = request.headers.host;
	response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
  fs.readFile('index.html', function (err, data){
     if (err) throw err;
     response.end(data);
		});
//response.write('blah blah blah');
console.log(domain);
//response.end('Test');
	});

server.listen(8000);
console.log("localhost:8000");

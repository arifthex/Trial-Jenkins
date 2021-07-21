var http = require('http');

var port = 5000;
http.createServer(function (req, res) {
	console.log("App is running in port : "+port);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);
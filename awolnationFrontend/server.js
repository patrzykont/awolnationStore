var http = require('http');
var front = require('./front');

http.createServer(front.handleRequest).listen(8000);
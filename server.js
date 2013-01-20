var http = require('http');
var sys = require('sys');
var exec = require('child_process').exec;

var server = http.createServer(function(req, resp){
    resp.writeHead(200, { "Content-Type": "text/plain"});
    resp.end("Hello world\n");
});

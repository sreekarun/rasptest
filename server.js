var http = require('http');
var sys = require('sys');
var exec = require('child_process').exec;

function fortuneCallback(error, stdout, stderr) { 
    return stderr;       
}

var server = http.createServer(function(req, resp){
    // Get a new string from fortune
    var message = exec("fortune", fortuneCallback);
    
    resp.writeHead(200, { "Content-Type": "text/plain"});
    resp.end( message + "\n");
});
